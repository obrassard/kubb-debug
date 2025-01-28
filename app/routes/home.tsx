import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import type { Route } from './+types/home';

// biome-ignore lint/correctness/noEmptyPattern: Kept for example purposes
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl">{t('welcome')}</h1>
      <NavLink to="/detail">Go to Detail</NavLink>
    </div>
  );
}
