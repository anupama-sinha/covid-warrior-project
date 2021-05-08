import '../App.css';
import React, { useReducer, useState } from 'react';
import Countries from './Countries';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function ShareContact() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return (
    // <div className="share-contact">
    <div style={{ border: '7px ridge red', width: '1425px', padding: '10px', float: 'left', marginLeft: "2%", textAlign: 'left' }}>

      <h1>Please share Contact Details here</h1>
      {submitting &&
        <div>
          You are submitting the following:
                    <ul>
            {Object.entries(formData).map(([name, value]) => (
              <div>
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              </div>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <div className="contact">
              <p>Contact Type :
                <span>
                  <select name="contactType" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="o2Cylinder">Oxygen Cylinder</option>
                    <option value="o2Concentrator">Oxygen Concentrator</option>
                    <option value="o2Refill">Oxygen Refill</option>
                    <option value="o2Can">Oxygen Can</option>
                    <option value="plasma">Plasma Donor</option>
                    <option value="icuHospital">ICU Hospital</option>
                    <option value="nonIcuHospital">Non-ICU Hospital</option>
                    <option value="paidTiffinDelivery">Paid Tiffin Delivery</option>
                    <option value="freeTiffinDelivery">Free Tiffin Delivery</option>
                    <option value="doctor">OnCall Doctor Warrior</option>
                    <option value="warrior">Covid Warrior</option>
                  </select>
                </span>
              </p>

              <p>Name : <span><input name="name" onChange={handleChange} /></span></p>
              <p>Mobile (Please separate each Mobile Numbers with Commas):<span><input name="mobile" onChange={handleChange} /></span></p>
              <p>Address (Optional) : <span><input name="address" onChange={handleChange} /></span></p>
              <p>City/Town : <span><input name="city" onChange={handleChange} /></span></p>
              <p>State : <span><input name="state" onChange={handleChange} /></span></p>
              <p>Country : 
                <span>
                  {/* <input name="country" onChange={handleChange} /> */}
                  <Countries/>
                </span>
              </p>
            </div>
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}