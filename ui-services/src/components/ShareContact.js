import '../App.css';
import React, { useReducer, useState } from 'react';
import District from './District';
import ResourceType from './ResourceType';
import State from './State';

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
              <p>Resource Type :
                <span>
                  <ResourceType/>
                </span>
              </p>
              <p>State : <span><State/></span></p>
              <p>District : <span><District/></span></p>
              <p>Contact Person : <span><input name="contactPerson" onChange={handleChange} /></span></p>
              <p>Contact Number : <span><input name="contactNumber" onChange={handleChange} /></span></p>
              <p>Additional Information : <span><input name="additionalInfo" onChange={handleChange} /></span></p>    
            </div>
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}