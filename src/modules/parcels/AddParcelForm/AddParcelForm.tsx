import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addParcel } from 'store/actions';
import { UIButton, UIInput } from 'modules/ui';

import './AddParcelForm.scss';

function AddParcelForm() {
  const [parcelNumber, setParcelNumber] = useState('');
  const dispatch = useDispatch();

  function handleChange(evt: any) {
    setParcelNumber(evt.target.value);
  }
  function handleFormSubmit(evt: any) {
    if (parcelNumber) {
      evt.preventDefault();
      dispatch(addParcel(parcelNumber));
      setParcelNumber('');
    }
  }

  return (
    <form action="" className="add-parcel-form" onSubmit={handleFormSubmit}>
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
