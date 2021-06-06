import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeParcel, updateParcel, checkParcelStatus } from 'store/actions';
import { Localization } from 'contexts';
import { ParcelListItem } from './ParcelListItem';

import './ParcelList.scss';

const ParcelList = () => {
  const { parcels } = useSelector((state) => state);
  const isApiLoading = useSelector((state) => state.api.isLoading);
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  function handleRemoveParcelClick(parcelId) {
    dispatch(removeParcel(parcelId));
  }

  function handleCheckParcelStatus(parcelId) {
    const { number: parcelNumer } = parcels.find(parcel => parcel.id === parcelId);
    dispatch(checkParcelStatus(parcelId, parcelNumer));
  }

  function handleParcelTitleBlur(parcelId, title) {
    dispatch(updateParcel(parcelId, { title }));
  }

  return (
    <ul className="parcel-list">
      {parcels.map((parcel) =>
        <ParcelListItem
          key={parcel.id}
          data={parcel}
          STR={STR}
          isApiLoading={isApiLoading}
          onRemoveParcelClick={handleRemoveParcelClick}
          onCheckParcelStatusClick={handleCheckParcelStatus}
          onParcelTitleBlur={handleParcelTitleBlur}
        />)}
    </ul>
  );
};

export { ParcelList };
