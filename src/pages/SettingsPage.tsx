import { useLanguage } from '../hooks/useLanguage';
import { NotificationSettings } from '../components/NotificationSettings';
import { LanguageSwitcher } from '../components/language-switcher';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Globe, Bell, Shield, Database, Palette, Smartphone } from 'lucide-react';
import { useState } from 'react';

// Fonction utilitaire pour générer un checksum simple
const generateChecksum = async (data: Record<string, unknown>): Promise<string> => {
  const dataStr = JSON.stringify(data);
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(dataStr);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
};

const SettingsPage = () => {
  const { t, language } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Fonctions pour gérer les données avec validation et gestion d'erreurs améliorée
  const exportData = async () => {
    setIsExporting(true);
    try {
      // Collecte des données avec validation
      const dataToExport: Record<string, unknown> = {
        exportDate: new Date().toISOString(),
        version: '1.1',
        appVersion: '1.10.1'
      };

      const keysToExport = [
        'notes',
        'notesEvents',
        'notesStudents',
        'notesInterested',
        'lessonScores',
        'timerState',
        'dictionaryFavorites',
        'calendarNotes',
        'photoNotes'
      ];

      // Validation et collecte des données
      for (const key of keysToExport) {
        try {
          const value = localStorage.getItem(key);
          if (value !== null) {
            // Validation basique du JSON
            if (value.trim().startsWith('{') || value.trim().startsWith('[')) {
              JSON.parse(value); // Test de validité JSON
            }
            dataToExport[key] = value;
          }
        } catch (error) {
          console.warn(`Donnée invalide pour ${key}, ignorée:`, error);
          // Continue sans cette donnée
        }
      }

      // Ajout des métadonnées
      dataToExport.metadata = {
        deviceId: localStorage.getItem('deviceId'),
        exportTimestamp: Date.now(),
        dataCount: Object.keys(dataToExport).length - 3, // Exclure exportDate, version, metadata
        checksum: await generateChecksum(dataToExport)
      };

      const dataStr = JSON.stringify(dataToExport, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `kbvlyon_backup_${new Date().toISOString().split('T')[0]}_${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert(t('settings.exportSuccess') || 'Données exportées avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'export:', error);
      alert(t('settings.exportError') || 'Erreur lors de l\'export des données. Vérifiez la console pour plus de détails.');
    } finally {
      setIsExporting(false);
    }
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validation du type de fichier
    if (!file.name.endsWith('.json')) {
      alert(t('settings.importInvalidFile') || 'Veuillez sélectionner un fichier JSON valide.');
      event.target.value = '';
      return;
    }

    // Validation de la taille (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert(t('settings.importFileTooLarge') || 'Le fichier est trop volumineux (max 10MB).');
      event.target.value = '';
      return;
    }

    setIsImporting(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const importedData = JSON.parse(e.target?.result as string);

        // Validation avancée du format
        if (!importedData.version || typeof importedData.version !== 'string') {
          throw new Error('Version manquante ou invalide');
        }

        if (!importedData.exportDate || isNaN(Date.parse(importedData.exportDate))) {
          throw new Error('Date d\'export invalide');
        }

        // Validation du checksum si présent
        if (importedData.metadata?.checksum) {
          const { checksum, ...dataWithoutChecksum } = importedData.metadata;
          const calculatedChecksum = await generateChecksum(dataWithoutChecksum);
          if (calculatedChecksum !== checksum) {
            console.warn('Checksum ne correspond pas, mais on continue...');
          }
        }

        // Liste des clés autorisées
        const allowedKeys = [
          'notes', 'notesEvents', 'notesStudents', 'notesInterested',
          'lessonScores', 'timerState', 'dictionaryFavorites',
          'calendarNotes', 'photoNotes'
        ];

        let importedCount = 0;

        // Restaurer les données avec validation
        for (const key of Object.keys(importedData)) {
          if (allowedKeys.includes(key) && importedData[key] !== null && importedData[key] !== undefined) {
            try {
              // Validation JSON pour les valeurs complexes
              if (typeof importedData[key] === 'string' &&
                  (importedData[key].trim().startsWith('{') || importedData[key].trim().startsWith('['))) {
                JSON.parse(importedData[key]); // Test de validité
              }
              localStorage.setItem(key, importedData[key]);
              importedCount++;
            } catch (error) {
              console.warn(`Donnée invalide pour ${key}, ignorée:`, error);
            }
          }
        }

        alert(`${t('settings.importSuccess') || 'Données importées avec succès!'} (${importedCount} éléments). Rechargez la page pour voir les changements.`);
        window.location.reload();
      } catch (error) {
        console.error('Erreur lors de l\'import:', error);
        alert(`${t('settings.importError') || 'Erreur lors de l\'import des données.'} ${error instanceof Error ? error.message : ''}`);
      } finally {
        setIsImporting(false);
        event.target.value = '';
      }
    };

    reader.onerror = () => {
      alert(t('settings.importReadError') || 'Erreur lors de la lecture du fichier.');
      setIsImporting(false);
      event.target.value = '';
    };

    reader.readAsText(file);
  };

  const resetData = async () => {
    const confirmMessage = t('settings.resetConfirm') ||
      'Êtes-vous sûr de vouloir supprimer toutes les données ? Cette action est irréversible.\n\nLes données suivantes seront supprimées :\n• Notes générales\n• Événements calendrier\n• Étudiants\n• Personnes intéressées\n• Scores des leçons\n• État du chronomètre\n• Favoris dictionnaire\n• Notes calendrier\n• Photos des notes';

    if (!window.confirm(confirmMessage)) {
      return;
    }

    // Confirmation supplémentaire pour les données importantes
    const extraConfirm = window.confirm(t('settings.resetExtraConfirm') ||
      'Dernière confirmation : Cette action ne peut pas être annulée. Continuer ?');

    if (!extraConfirm) {
      return;
    }

    setIsResetting(true);
    try {
      const keysToRemove = [
        'notes',
        'notesEvents',
        'notesStudents',
        'notesInterested',
        'lessonScores',
        'timerState',
        'dictionaryFavorites',
        'calendarNotes',
        'photoNotes'
      ];

      let removedCount = 0;
      const errors: string[] = [];

      // Suppression avec gestion d'erreurs individuelle
      keysToRemove.forEach(key => {
        try {
          if (localStorage.getItem(key) !== null) {
            localStorage.removeItem(key);
            removedCount++;
          }
        } catch (error) {
          console.error(`Erreur lors de la suppression de ${key}:`, error);
          errors.push(key);
        }
      });

      // Nettoyer aussi les backups si existants
      try {
        keysToRemove.forEach(key => {
          const backupKey = `${key}_backup`;
          localStorage.removeItem(backupKey);
        });
      } catch (error) {
        console.warn('Erreur lors du nettoyage des sauvegardes:', error);
      }

      if (errors.length > 0) {
        alert(`${t('settings.resetPartialSuccess') || 'Données supprimées partiellement.'} ${removedCount} éléments supprimés. Erreurs pour: ${errors.join(', ')}`);
      } else {
        alert(`${t('settings.resetSuccess') || 'Toutes les données ont été supprimées.'} (${removedCount} éléments)`);
      }

      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la réinitialisation:', error);
      alert(t('settings.resetError') || 'Erreur lors de la réinitialisation des données.');
    } finally {
      setIsResetting(false);
    }
  };

  const settingsSections = [
    {
      icon: Globe,
      title: t('settings.changeLanguage'),
      description: t('settings.languageDescription'),
      component: <LanguageSwitcher />
    },
    {
      icon: Bell,
      title: t('settings.notifications'),
      description: t('settings.notificationsDescription'),
      component: <NotificationSettings />
    },
    {
      icon: Palette,
      title: t('settings.theme'),
      description: t('settings.themeDescription'),
      component: (
        <div className="flex gap-2">
          <Badge variant="outline">{t('settings.light')}</Badge>
          <Badge variant="outline">{t('settings.dark')}</Badge>
          <Badge variant="outline">{t('settings.system')}</Badge>
        </div>
      )
    },
    {
      icon: Shield,
      title: t('settings.permissions'),
      description: t('settings.permissionsDescription'),
      component: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.camera')}</span>
            <Badge variant="secondary">{t('settings.allowed')}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.microphone')}</span>
            <Badge variant="secondary">{t('settings.allowed')}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('settings.location')}</span>
            <Badge variant="secondary">{t('settings.denied')}</Badge>
          </div>
        </div>
      )
    },
    {
       icon: Database,
       title: t('settings.data'),
       description: t('settings.dataDescription'),
       component: (
         <div className="flex gap-2">
           <Button
             variant="outline"
             size="sm"
             onClick={exportData}
             disabled={isExporting}
           >
             {isExporting ? (t('settings.exporting') || 'Export...') : t('settings.export')}
           </Button>
           <label className="inline-flex">
             <input
               type="file"
               accept=".json"
               onChange={importData}
               className="hidden"
               disabled={isImporting}
             />
             <Button
               variant="outline"
               size="sm"
               asChild
               disabled={isImporting}
             >
               <span>
                 {isImporting ? (t('settings.importing') || 'Import...') : t('settings.import')}
               </span>
             </Button>
           </label>
           <Button
             variant="destructive"
             size="sm"
             onClick={resetData}
             disabled={isResetting}
           >
             {isResetting ? (t('settings.resetting') || 'Reset...') : t('settings.reset')}
           </Button>
         </div>
       )
     },
    {
      icon: Smartphone,
      title: t('settings.appInfo'),
      description: t('settings.appInfoDescription'),
      component: (
        <div className="space-y-1 text-sm">
          <p><strong>{t('settings.version')}:</strong> 1.10.1</p>
          <p><strong>{t('settings.developedBy')}:</strong> Pinto Francisco</p>
          <p><strong>{t('settings.currentLanguage')}:</strong> {language === 'pt' ? '🇵🇹 Português' : '🇨🇻 Crioulo'}</p>
          <p className="text-xs text-muted-foreground">© 2024 Pinto Francisco</p>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{t('settings.title')}</h1>
        <p className="text-muted-foreground mt-2">
          {t('settings.subtitle')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {section.title}
                </CardTitle>
                <CardDescription>
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {section.component}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPage;
