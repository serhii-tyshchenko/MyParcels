import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { UIIconButton } from 'modules/ui';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.settings);
  const btnIcon = theme === 'light' ? 'moon' : 'sun';

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(updateSettings({ theme: newTheme }));
  }

  return (
    <UIIconButton
      icon={btnIcon}
      onClick={handleThemeChange}
      className="theme-toggler"
    />
  );
};

export { ThemeToggler };
