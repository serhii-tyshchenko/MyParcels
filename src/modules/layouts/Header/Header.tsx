import { ThemeToggler, LanguageSelector } from 'modules/settings';
import { AddParcelForm } from 'modules/parcels';

import './Header.scss';

const NAME_SPACE = 'header';

const Header = () => (
  <header className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__content wrapper`}>
      <span className={`${NAME_SPACE}__logo`}>
        {process.env.REACT_APP_NAME}
      </span>
      <div className={`${NAME_SPACE}__middle`}>
        <AddParcelForm />
      </div>
      <div className={`${NAME_SPACE}__right`}>
        <LanguageSelector />
        <ThemeToggler />
      </div>
    </div>
  </header>
);

export { Header };
