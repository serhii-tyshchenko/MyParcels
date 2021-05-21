import { ThemeToggler } from 'modules/settings';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <span className="header__logo">Header</span>
      <ThemeToggler />
    </div>
  </header>
);

export { Header };
