import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';
import { myClassnames } from 'utils';

import './ParcelListItem.scss';

const NAME_SPACE = 'parcel-list-item';

const ParcelListItem = (props) => {
  const { data, onRemoveParcelClick, onParcelUpdate, onParcelArchive, onCheckParcelStatusClick, STR } = props;
  const { id, number, citySender, cityRecipient, status, scheduledDeliveryDate, isArchived } = data;
  const [parcelTitle, setParcelTitle] = useState(data.title);
  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => setIsApiLoading(false), [data]);

  const checkStatusBtnClass = myClassnames(`${NAME_SPACE}__check-btn`, { loading: isApiLoading });

  const handleParcelTitleChange = (ev) => setParcelTitle(ev.target.value);

  const handleParcelTitleBlur = () => onParcelUpdate(id, { title: parcelTitle });

  const handleArchiveParcelClick = () => onParcelArchive(id);

  const handleParcelStatusCheckClick = () => {
    setIsApiLoading(true);
    onCheckParcelStatusClick(id);
  }
  const handleRemoveParcelClick = () => onRemoveParcelClick(id);

  const archiveBtnTitle = isArchived ? STR.UNARCHIVE_PARCEL : STR.ARCHIVE_PARCEL

  return (
    <li id={id} className={NAME_SPACE}>
      <header className={`${NAME_SPACE}__header`}>
        <UIInput
          className={`${NAME_SPACE}__title`}
          value={parcelTitle}
          onChange={handleParcelTitleChange}
          onBlur={handleParcelTitleBlur}
        />
        {!isArchived && (<UIIconButton
          onClick={handleParcelStatusCheckClick}
          className={checkStatusBtnClass}
          title={STR.CHECK_PARCEL_STATUS}
          icon="arrows-cw"
        />)
        }
        <UIIconButton
          onClick={handleArchiveParcelClick}
          className={`${NAME_SPACE}__archive-btn`}
          title={archiveBtnTitle}
          icon="box"
        />
        <UIIconButton
          onClick={handleRemoveParcelClick}
          className={`${NAME_SPACE}__remove-btn`}
          title={STR.REMOVE_PARCEL}
          icon="trash"
        />
      </header>
      <main className={`${NAME_SPACE}__main`}>
        <h4 className={`${NAME_SPACE}__number`}>{number}</h4>
        <div className={`${NAME_SPACE}__route`}>{citySender} ⇒ {cityRecipient}</div>
        <div className={`${NAME_SPACE}__status`}>{status}</div>
        <div className={`${NAME_SPACE}__delivery-date`}>{scheduledDeliveryDate}</div>
      </main>
    </li >
  );
};

export { ParcelListItem };
