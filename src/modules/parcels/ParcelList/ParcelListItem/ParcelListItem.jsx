import { useState } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';

import './ParcelListItem.scss';

const ParcelListItem = (props) => {
  const { data, onRemoveParcelClick, onParcelTitleBlur } = props;
  const [parcelTitle, setParcelTitle] = useState(data.title);
  function handleParcelTitleChange(e) {
    setParcelTitle(e.target.value);
  }

  return (
    <li id={data.id} className="parcel-list-item">
      <header className="parcel-list-item__header">
        <UIInput extraClassName="parcel-list-item__title" value={parcelTitle} onChange={handleParcelTitleChange} onBlur={onParcelTitleBlur} />
        <UIIconButton onClick={onRemoveParcelClick} extraClassName="parcel-list-item__remove-btn" title="Remove" icon="trash" />
      </header>
      <main className="parcel-list-item__main">
        <h4 className="parcel-list-item__number">{data.number}</h4>
        <div className="parcel-list-item__route">{data.citySender} - {data.cityRecipient}</div>
        <div className="parcel-list-item__status">{data.status}</div>
      </main>
      <footer className="parcel-list-item__footer">
        Footer
        </footer>
    </li>
  );
};

export { ParcelListItem };
