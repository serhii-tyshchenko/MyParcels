import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addParcel } from 'store/actions';
import { UIButton, UIInput } from 'modules/ui';

import './AddParcelForm.scss';

function AddParcelForm() {
  const [parcelNumber, setParcelNumber] = useState('');
  const dispatch = useDispatch();
  const { parcels } = useSelector((state) => state);

  function handleChange(evt) {
    setParcelNumber(evt.target.value);
  }
  function handleTrackParcelSubmit(evt) {
    evt.preventDefault();
    if (!parcelNumber) {
      alert('Please enter tracking number!');
      return;
    }
    if (parcels.some(parcel => parcel.number === parcelNumber)) {
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
        placeholder="Enter tracking number"
        required
      />
      <UIButton
        type="submit"
        extraClassName="add-parcel-form__btn"
        text="Track"
      />
    </form>
  );
}

export { AddParcelForm };
