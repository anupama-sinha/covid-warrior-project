import '../App.css';
import React, { useReducer, useState } from 'react';
import Countries from './Countries';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function ContactUs() {
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

      <p>Please raise your voice and log a feedback for us to enhance the application so that it can benefit you</p>
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
              <p>Name (Optional): <span><input name="name" onChange={handleChange} /></span></p>
              <p>Mobile (Optional):<span><input name="mobile" onChange={handleChange} /></span></p>
              <p>Address (Optional) : <span><input name="address" onChange={handleChange} /></span></p>
              <p>Feedback : <span><input name="feedback" onChange={handleChange} /></span></p>
              <p>State : <span><input name="state" onChange={handleChange} /></span></p>
              <p>Country :
                <span>
                  {/* <input name="country" onChange={handleChange} /> */}
                  <Countries onChange={handleChange}/>
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
