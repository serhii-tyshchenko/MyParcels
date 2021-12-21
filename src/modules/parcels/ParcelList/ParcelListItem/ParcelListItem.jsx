import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';
import { getParcelId } from './utils';

import './ParcelListItem.scss';

const NAME_SPACE = 'parcel-list-item';

const ParcelListItem = (props) => {
  const { data, onRemoveParcelClick, onParcelTitleBlur, onCheckParcelStatusClick, STR } = props;
  const [parcelTitle, setParcelTitle] = useState(data.title);
  const [isApiLoading, setApiLoading] = useState(false);

  useEffect(() => setApiLoading(false), [data]);

  const checkStatusBtnClass = isApiLoading ? 'parcel-list-item__check-btn loading' : 'parcel-list-item__check-btn';

  const handleParcelTitleChange = (ev) => setParcelTitle(ev.target.value);

  const handleParcelTitleBlur = (ev) => onParcelTitleBlur(getParcelId(ev), parcelTitle);

  const handleParcelStatusCheckClick = (ev) => {
    setApiLoading(true);
    onCheckParcelStatusClick(getParcelId(ev));
  }
  const handleRemoveParcelClick = (ev) => onRemoveParcelClick(getParcelId(ev));

  return (
    <li id={data.id} className={NAME_SPACE}>
      <header className={`${NAME_SPACE}__header`}>
        <UIInput extraClassName={`${NAME_SPACE}__title`} value={parcelTitle} onChange={handleParcelTitleChange} onBlur={handleParcelTitleBlur} />
        <UIIconButton onClick={handleParcelStatusCheckClick} extraClassName={checkStatusBtnClass} title={STR.CHECK_PARCEL_STATUS} icon="arrows-cw" />
        <UIIconButton onClick={handleRemoveParcelClick} extraClassName={`${NAME_SPACE}__remove-btn`} title={STR.REMOVE_PARCEL} icon="trash" />
      </header>
      <main className={`${NAME_SPACE}__main`}>
        <h4 className={`${NAME_SPACE}__number`}>{data.number}</h4>
        <div className={`${NAME_SPACE}__route`}>{data.citySender} - {data.cityRecipient}</div>
        <div className={`${NAME_SPACE}__status`}>{data.status}</div>
        <div className={`${NAME_SPACE}__delivery-date`}>{data.scheduledDeliveryDate}</div>
      </main>
    </li >
  );
};

export { ParcelListItem };
