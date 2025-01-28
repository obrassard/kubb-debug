import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

export function meta() {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Detail() {
  const { i18n } = useTranslation();
  return (
    <div>
      <h1>Current Language : {i18n.language}</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
