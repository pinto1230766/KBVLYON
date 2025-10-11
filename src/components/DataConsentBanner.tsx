import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, X } from 'lucide-react';

const DataConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('data-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('data-consent', 'accepted');
    setHasConsented(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('data-consent', 'declined');
    setHasConsented(true);
    setIsVisible(false);
  };

  if (!isVisible || hasConsented) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg safe-area-padding-bottom">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-2">
                Gestão de Dados e Privacidade
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Esta aplicação utiliza dados locais para melhorar sua experiência de aprendizagem.
                Seus dados pessoais não são coletados nem compartilhados. Você pode gerenciar suas
                preferências de privacidade nas configurações.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" onClick={handleAccept}>
                  Aceitar
                </Button>
                <Button size="sm" variant="outline" onClick={handleDecline}>
                  Recusar
                </Button>
                <Button size="sm" variant="ghost" asChild>
                  <a href="/privacy-policy">
                    Política de Privacidade
                  </a>
                </Button>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataConsentBanner;