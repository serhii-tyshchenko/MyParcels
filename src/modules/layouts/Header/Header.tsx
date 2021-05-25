import { ThemeToggler, LanguageSelector } from 'modules/settings';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <span className="header__logo">MyParcels</span>
      <div className="header__right">
        <LanguageSelector />
        <ThemeToggler />
      </div>
    </div>
  </header>
);

export { Header };
