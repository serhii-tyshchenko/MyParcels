import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addParcel } from 'store/actions';
import { Localization } from 'contexts';
import { UIInput, UIIconButton } from 'modules/ui';

import './AddParcelForm.scss';

const NAME_SPACE = 'add-parcel-form';

const AddParcelForm = () => {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const { parcels } = useSelector((state) => state);
  const [parcelNumber, setParcelNumber] = useState('');

  const handleChange = (evt) => setParcelNumber(evt.target.value);

  const handleTrackParcelSubmit = (evt) => {
    evt.preventDefault();
    if (!parcelNumber) {
      alert('Please enter tracking number!');
      return;
    }
    const isParcelAlreadyExists = parcels.some(parcel => parcel.number === parcelNumber);
    if (isParcelAlreadyExists) {
      alert('Parcel already added!');
      return
    }
    dispatch(addParcel(parcelNumber));
    setParcelNumber('');
  }

  return (
    <form
      action=""
      className={NAME_SPACE}
      onSubmit={handleTrackParcelSubmit}
      noValidate
    >
      <UIInput
        className={`${NAME_SPACE}__input`}
        value={parcelNumber}
        onChange={handleChange}
        placeholder={STR.ENTER_TRACKING_NUMBER}
        required
      />
      <UIIconButton
        type="submit"
        icon="search"
        className={`${NAME_SPACE}__btn`}
        text={STR.TRACK_PARCEL}
      />
    </form>
  );
}

export { AddParcelForm };
