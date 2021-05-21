import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeParcel, updateParcel } from 'store/actions';
import { Localization } from 'contexts';
import { ParcelListItem } from './ParcelListItem';

import './ParcelList.scss';

const ParcelList = () => {
  const { parcels } = useSelector((state) => state);
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  function handleRemoveParcelClick(e) {
    const parcelId = e.target.closest('li').id;
    dispatch(removeParcel(parcelId));
  }

  function handleParcelTitleBlur(e) {
    const parcelId = e.target.closest('li').id;
    const newParcelTitle = e.target.value;
    dispatch(updateParcel(parcelId, { title: newParcelTitle }));
  }

  return (
    <ul className="parcel-list">
      {parcels.map((parcel) =>
        <ParcelListItem
          key={parcel.id}
          data={parcel}
          STR={STR}
          onRemoveParcelClick={handleRemoveParcelClick}
          onParcelTitleBlur={handleParcelTitleBlur}
        />)}
    </ul>
  );
};

export { ParcelList };
