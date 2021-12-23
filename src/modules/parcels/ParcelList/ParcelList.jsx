import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeParcel, updateParcel, checkParcelStatus } from 'store/actions';
import { UICheckbox } from 'modules/ui';
import { Localization } from 'contexts';
import { ParcelListItem } from './ParcelListItem';

import './ParcelList.scss';

const NAME_SPACE = 'parcel-list';

const ParcelList = () => {
  const dispatch = useDispatch();
  const STR = useContext(Localization);
  const [showArchived, setShowArchived] = useState(false);

  const parcels = useSelector((state) => state.parcels).filter(parcel => parcel.isArchived === showArchived);
  const isApiLoading = useSelector((state) => state.api.isLoading);


  const handleShowArchivedChange = () => {
    setShowArchived(!showArchived)
  }

  const handleRemoveParcelClick = (parcelId) => dispatch(removeParcel(parcelId));

  const handleCheckParcelStatus = (parcelId) => {
    const { number: parcelNumer } = parcels.find(parcel => parcel.id === parcelId);
    dispatch(checkParcelStatus(parcelId, parcelNumer));
  }

  const onParcelUpdate = (parcelId, newData) => dispatch(updateParcel(parcelId, newData));
  const onParcelArchive = (parcelId) => {
    const { isArchived } = parcels.find(parcel => parcel.id === parcelId);
    dispatch(updateParcel(parcelId, { isArchived: !isArchived }))
  }
    ;

  return (
    <>
      <div className={`${NAME_SPACE}__show-archived`}>
        <span>{STR.SHOW_ARCHIVED}</span>
        <UICheckbox checked={showArchived} onChange={handleShowArchivedChange} />
      </div>
      {parcels.length
        ? (<>

          <ul className={NAME_SPACE}>
            {parcels.map((parcel) =>
              <ParcelListItem
                key={parcel.id}
                data={parcel}
                STR={STR}
                isApiLoading={isApiLoading}
                onRemoveParcelClick={handleRemoveParcelClick}
                onCheckParcelStatusClick={handleCheckParcelStatus}
                onParcelUpdate={onParcelUpdate}
                onParcelArchive={onParcelArchive}
              />)}
          </ul>
        </>)
        : (<div className={`${NAME_SPACE}__no-parcels`}>{STR.NO_PARCELS}</div>)}
    </>
  );
};

export { ParcelList };
