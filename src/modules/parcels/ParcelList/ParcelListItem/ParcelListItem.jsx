import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';
import { myClassnames } from 'utils';

import { getParcelId } from './utils';

import './ParcelListItem.scss';

const NAME_SPACE = 'parcel-list-item';

const ParcelListItem = (props) => {
  const { data, onRemoveParcelClick, onParcelUpdate, onCheckParcelStatusClick, STR } = props;
  const { id, number, citySender, cityRecipient, status, scheduledDeliveryDate } = data;
  const [parcelTitle, setParcelTitle] = useState(data.title);
  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => setIsApiLoading(false), [data]);

  const checkStatusBtnClass = myClassnames(`${NAME_SPACE}__check-btn`, { loading: isApiLoading });

  const handleParcelTitleChange = (ev) => setParcelTitle(ev.target.value);

  const handleParcelTitleBlur = (ev) => onParcelUpdate(getParcelId(ev), parcelTitle);

  const handleParcelStatusCheckClick = (ev) => {
    setIsApiLoading(true);
    onCheckParcelStatusClick(getParcelId(ev));
  }
  const handleRemoveParcelClick = (ev) => onRemoveParcelClick(getParcelId(ev));

  return (
    <li id={id} className={NAME_SPACE}>
      <header className={`${NAME_SPACE}__header`}>
        <UIInput extraClassName={`${NAME_SPACE}__title`} value={parcelTitle} onChange={handleParcelTitleChange} onBlur={handleParcelTitleBlur} />
        <UIIconButton onClick={handleParcelStatusCheckClick} className={checkStatusBtnClass} title={STR.CHECK_PARCEL_STATUS} icon="arrows-cw" />
        <UIIconButton onClick={handleRemoveParcelClick} className={`${NAME_SPACE}__remove-btn`} title={STR.REMOVE_PARCEL} icon="trash" />
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
