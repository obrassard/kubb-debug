import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 mb-4">
      <Button size="sm" onClick={() => changeLanguage('fr')}>
        FR
      </Button>
      <Button size="sm" onClick={() => changeLanguage('en')}>
        EN
      </Button>
    </div>
  );
}
