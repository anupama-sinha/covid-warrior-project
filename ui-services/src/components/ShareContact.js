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
  const [resourceType, setResourceType] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  let DistrictRender;

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  const handleResource = (res) => {
    setResourceType(res.selectedRes);
    console.log("Finally ::", res.selectedRes)
    setFormData({
      name: "resourceType",
      value: res.selectedRes
    });
  }

  const handleDistrict = (district) => {
    setDistrict(district.selectedDist);
    console.log("Finally ::", district.selectedDist)
    setFormData({
      name: "district",
      value: district.selectedDist
    });
  }

  const handleState = (state) => {
    setState(state.selectedStat);
    console.log("Finally ::", state.selectedStat)
    setFormData({
      name: "state",
      value: state.selectedStat
    });

    
    if (state.selectedStat !== '' || state.selectedStat !== null) {
      <div>District :
                <span>
          DistrictRender = <District onSelectDistrict={handleDistrict} state={state.selectedStat} />
        </span>
      </div>
  }

  // const DistrictRender = function () {
  //   let DistrictRender;
  //   console.log("sts::", this.state)
  //   if (this.state.state !== '' || this.state.state !== null) {
  //     <div>District :
  //               <span>
  //         DistrictRender = <District onSelectDistrict={handleDistrict} state={state} />
  //       </span>
  //     </div>
  //   }

  }

  return (
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
                  <ResourceType onSelectResource={handleResource} />
                </span>
              </p>
              <p>State : <span><State onSelectState={handleState} /></span></p>
              {DistrictRender}
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