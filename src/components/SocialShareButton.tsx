import React, { useState } from 'react';
import { useSocialShare } from '@/hooks/useSocialShare';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Share2, Mail, MessageCircle, Twitter, Facebook, Copy } from 'lucide-react';

interface SocialShareButtonProps {
  data: {
    title?: string;
    text?: string;
    url?: string;
  };
  variant?: 'button' | 'menu';
  className?: string;
}

export const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  data,
  variant = 'button',
  className
}) => {
  const {
    share,
    isSupported,
    isSharing,
    shareViaEmail,
    shareViaWhatsApp,
    shareViaTwitter,
    shareViaFacebook,
    copyToClipboard,
    getAvailableFallbacks
  } = useSocialShare();

  const [showMenu, setShowMenu] = useState(false);

  const handleShare = async () => {
    if (variant === 'menu') {
      setShowMenu(!showMenu);
      return;
    }

    try {
      await share(data);
    } catch (error) {
      console.error('Erreur lors du partage:', error);
    }
  };

  const handleFallbackShare = async (platform: string) => {
    const shareText = [data.title, data.text, data.url].filter(Boolean).join(' - ');

    switch (platform) {
      case 'email':
        shareViaEmail(data);
        break;
      case 'whatsapp':
        shareViaWhatsApp(data);
        break;
      case 'twitter':
        shareViaTwitter(data);
        break;
      case 'facebook':
        shareViaFacebook(data);
        break;
      case 'clipboard':
        try {
          await copyToClipboard(shareText);
          alert('Copié dans le presse-papiers!');
        } catch (error) {
          console.error('Erreur lors de la copie:', error);
        }
        break;
    }
    setShowMenu(false);
  };

  const availableFallbacks = getAvailableFallbacks();

  if (variant === 'menu') {
    return (
      <div className={`relative ${className}`}>
        <Button
          onClick={handleShare}
          variant="outline"
          size="sm"
          disabled={isSharing}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Partager
        </Button>

        {showMenu && (
          <Card className="absolute top-full mt-2 right-0 z-50 w-48">
            <CardContent className="p-2">
              <div className="space-y-1">
                {isSupported && (
                  <Button
                    onClick={() => handleFallbackShare('native')}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    disabled={isSharing}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Partage natif
                  </Button>
                )}

                {availableFallbacks.map((platform) => {
                  const icons = {
                    email: Mail,
                    whatsapp: MessageCircle,
                    twitter: Twitter,
                    facebook: Facebook,
                    clipboard: Copy
                  };

                  const labels = {
                    email: 'Email',
                    whatsapp: 'WhatsApp',
                    twitter: 'Twitter',
                    facebook: 'Facebook',
                    clipboard: 'Copier'
                  };

                  const Icon = icons[platform as keyof typeof icons];

                  return (
                    <Button
                      key={platform}
                      onClick={() => handleFallbackShare(platform)}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {labels[platform as keyof typeof labels]}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      size="sm"
      disabled={isSharing}
      className={className}
    >
      <Share2 className="w-4 h-4 mr-2" />
      {isSharing ? 'Partage...' : 'Partager'}
    </Button>
  );
};

export default SocialShareButton;