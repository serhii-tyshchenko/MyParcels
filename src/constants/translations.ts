type Translation = {
  [key: string]: { [key: string]: string };
};

export const translations: Translation = {
  en: {
    SIGN_IN: 'Sign In',
    TRACK_PARCEL: 'Track',
    ENTER_TRACKING_NUMBER: 'Enter tracking number',
    REMOVE_PARCEL: 'Remove parcel',
    ARCHIVE_PARCEL: 'Archive parcel',
    UNARCHIVE_PARCEL: 'Unarchive parcel',
    CHECK_PARCEL_STATUS: 'Check parcel status',
    NO_PARCELS: 'You have no parcels',
    SHOW_ARCHIVED: 'Show archived',
  },
  ua: {
    SIGN_IN: 'Увійти',
    TRACK_PARCEL: 'Відстежити',
    ENTER_TRACKING_NUMBER: 'Введіть номер посилки',
    REMOVE_PARCEL: 'Видалити посилку',
    ARCHIVE_PARCEL: 'Додати у архів',
    UNARCHIVE_PARCEL: 'Вилучити з архіва',
    CHECK_PARCEL_STATUS: 'Перевірити статус посилки',
    NO_PARCELS: 'У вас немає посилок',
    SHOW_ARCHIVED: 'Показати архів',
  },
  ru: {
    SIGN_IN: 'Войти',
    TRACK_PARCEL: 'Отследить',
    ENTER_TRACKING_NUMBER: 'Введите номер посылки',
    REMOVE_PARCEL: 'Удалить посылку',
    ARCHIVE_PARCEL: 'Добавить в архив',
    UNARCHIVE_PARCEL: 'Удалить из архива',
    CHECK_PARCEL_STATUS: 'Проверить статус посылки',
    NO_PARCELS: 'У вас нет посылок',
    SHOW_ARCHIVED: 'Показать архив',
  },
};
