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
    TRACK_PARCEL: 'Track',
    ENTER_TRACKING_NUMBER: 'Enter tracking number',
    REMOVE_PARCEL: 'Remove parcel',
  },
  ua: {
    SIGN_IN: 'Увійти',
    TRACK_PARCEL: 'Відстежити',
    ENTER_TRACKING_NUMBER: 'Введіть номер посилки',
    REMOVE_PARCEL: 'Видалити посилку',
  },
  ru: {
    SIGN_IN: 'Войти',
    TRACK_PARCEL: 'Отследить',
    ENTER_TRACKING_NUMBER: 'Введите номер посылки',
    REMOVE_PARCEL: 'Удалить посылку',
  },
};

export { translations, languages };
