import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Localization } from 'contexts';
import { updateSettings } from 'store/actions';
import { languages } from 'assets/localization';
import { UISelect } from 'modules/ui';

import './LanguageSelector.scss';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const { language: currLang } = useSelector((state) => state.settings);

  function handleLanguageChange(evt) {
    const language = evt.target.value;
    dispatch(updateSettings({ language }));
  }

  return (
    <UISelect
      value={currLang}
      onChange={handleLanguageChange}
      options={languages}
      extraClassName="language-selector"
      title={STR.TOGGLE_LANGUAGE}
    />
  );
};

export { LanguageSelector };
