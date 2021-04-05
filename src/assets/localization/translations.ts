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
  },
  ua: {
    SIGN_IN: 'Увійти',
  },
  ru: {
    SIGN_IN: 'Войти',
  },
};

export { translations, languages };
