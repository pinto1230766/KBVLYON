import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NotificationSettings = () => {
  const { t } = useTranslation();
  const [notificationSettings, setNotificationSettings] = useState({
    bibleStudies: true,
    meetings: true,
    preaching: true,
    dailyText: true,
  });

  const handleToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <span>{t('settings.notifications.bibleStudies')}</span>
        <button 
          onClick={() => handleToggle('bibleStudies')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${notificationSettings.bibleStudies ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${notificationSettings.bibleStudies ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
      <div className="flex items-center justify-between py-2">
        <span>{t('settings.notifications.meetings')}</span>
        <button 
          onClick={() => handleToggle('meetings')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${notificationSettings.meetings ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${notificationSettings.meetings ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
      <div className="flex items-center justify-between py-2">
        <span>{t('settings.notifications.preaching')}</span>
        <button 
          onClick={() => handleToggle('preaching')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${notificationSettings.preaching ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${notificationSettings.preaching ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
      <div className="flex items-center justify-between py-2">
        <span>{t('settings.notifications.dailyText')}</span>
        <button 
          onClick={() => handleToggle('dailyText')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full ${notificationSettings.dailyText ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${notificationSettings.dailyText ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
