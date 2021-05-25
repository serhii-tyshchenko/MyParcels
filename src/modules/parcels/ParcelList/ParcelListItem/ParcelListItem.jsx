import { useState, useEffect } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';

import './ParcelListItem.scss';

const ParcelListItem = (props) => {
  const { data, onRemoveParcelClick, onParcelTitleBlur, onCheckParcelStatusClick, STR } = props;
  const [parcelTitle, setParcelTitle] = useState(data.title);
  const [isApiLoading, setApiLoading] = useState(false);
  useEffect(() => {
    setApiLoading(false);
  }, [data]);

  const checkStatusBtnClass = isApiLoading ? 'parcel-list-item__check-btn loading' : 'parcel-list-item__check-btn';

  function handleParcelTitleChange(ev) {
    setParcelTitle(ev.target.value);
  }
  function handleParcelStatusCheckClick(ev) {
    setApiLoading(true);
    onCheckParcelStatusClick(ev);
  }

  return (
    <li id={data.id} className="parcel-list-item">
      <header className="parcel-list-item__header">
        <UIInput extraClassName="parcel-list-item__title" value={parcelTitle} onChange={handleParcelTitleChange} onBlur={onParcelTitleBlur} />
        <UIIconButton onClick={handleParcelStatusCheckClick} extraClassName={checkStatusBtnClass} title={STR.CHECK_PARCEL_STATUS} icon="arrows-cw" />
        <UIIconButton onClick={onRemoveParcelClick} extraClassName="parcel-list-item__remove-btn" title={STR.REMOVE_PARCEL} icon="trash" />
      </header>
      <main className="parcel-list-item__main">
        <h4 className="parcel-list-item__number">{data.number}</h4>
        <div className="parcel-list-item__route">{data.citySender} - {data.cityRecipient}</div>
        <div className="parcel-list-item__status">{data.status}</div>
        <div className="parcel-list-item__delivery-date">{data.scheduledDeliveryDate}</div>
      </main>
    </li>
  );
};

export { ParcelListItem };
