import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addParcel } from 'store/actions';
import { Localization } from 'contexts';
import { UIButton, UIInput } from 'modules/ui';

import './AddParcelForm.scss';

function AddParcelForm() {
  const STR = useContext(Localization);
  const dispatch = useDispatch();
  const { parcels } = useSelector((state) => state);
  const [parcelNumber, setParcelNumber] = useState('');

  function handleChange(evt) {
    setParcelNumber(evt.target.value);
  }
  function handleTrackParcelSubmit(evt) {
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
      className="add-parcel-form"
      onSubmit={handleTrackParcelSubmit}
      noValidate
    >
      <UIInput
        extraClassName="add-parcel-form__input"
        value={parcelNumber}
        onChange={handleChange}
        placeholder={STR.ENTER_TRACKING_NUMBER}
        required
      />
      <UIButton
        type="submit"
        extraClassName="add-parcel-form__btn"
        text={STR.TRACK_PARCEL}
      />
    </form>
  );
}

export { AddParcelForm };
