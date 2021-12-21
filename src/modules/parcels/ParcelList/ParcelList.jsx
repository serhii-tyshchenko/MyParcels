import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeParcel, updateParcel, checkParcelStatus } from 'store/actions';
import { Localization } from 'contexts';
import { ParcelListItem } from './ParcelListItem';

import './ParcelList.scss';

const NAME_SPACE = 'parcel-list';

const ParcelList = () => {
  const { parcels } = useSelector((state) => state);
  const isApiLoading = useSelector((state) => state.api.isLoading);
  const dispatch = useDispatch();
  const STR = useContext(Localization);

  const handleRemoveParcelClick = (parcelId) => dispatch(removeParcel(parcelId));

  const handleCheckParcelStatus = (parcelId) => {
    const { number: parcelNumer } = parcels.find(parcel => parcel.id === parcelId);
    dispatch(checkParcelStatus(parcelId, parcelNumer));
  }

  const onParcelUpdate = (parcelId, title) => dispatch(updateParcel(parcelId, { title }));

  return (
    <>
      {parcels.length
        ? (<ul className={NAME_SPACE}>
          {parcels.map((parcel) =>
            <ParcelListItem
              key={parcel.id}
              data={parcel}
              STR={STR}
              isApiLoading={isApiLoading}
              onRemoveParcelClick={handleRemoveParcelClick}
              onCheckParcelStatusClick={handleCheckParcelStatus}
              onParcelUpdate={onParcelUpdate}
            />)}
        </ul>)
        : (<div className={`${NAME_SPACE}__no-parcels`}>{STR.NO_PARCELS}</div>)}
    </>
  );
};

export { ParcelList };
