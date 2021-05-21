const languages: Array<{ value: string; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'ua', label: 'UA' },
  { value: 'ru', label: 'RU' },
];

type Translation = {
  [key: string]: { [key: string]: string };
};

const translations: Translation = {
  en: {
    SIGN_IN: 'Sign In',
    TRACK: 'Track',
  },
  ua: {
    SIGN_IN: 'Увійти',
    TRACK: 'Відстежити',
  },
  ru: {
    SIGN_IN: 'Войти',
    TRACK: 'Отследить',
  },
};

export { translations, languages };
