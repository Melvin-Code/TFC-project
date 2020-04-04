import React, { Component } from "react";

class Section4 extends Component {
  render() {
    return (
      <section>
        <div className='section4'>
          <div className='sec4-top-box'>
            <h3 top-box-text>Ready for a better closing? Let us show you what TitleLeap can do.</h3>
          </div>
          <div className='sec4-dwn-box'>
            <div className='dwn-box-form'>
              <h4 className='form-top'>Tell us a bit about yourself</h4>
              <form className='form-center'>
                <input className='form-input' type="text" name="name" placeholder="    First Name" />
                <input className='form-input' type="text" name="laast-name" placeholder="    Last Name" />
                <input className='form-input' type="text" name="email" placeholder="    Email" />
                <input className='form-input' type="tel" name="phone" placeholder="    Phone Number" />
                <input className='form-input' type="text" name="company" placeholder="    Company Name" />
                <fieldset className='form-input'>
                    <img alt='drop arrow' src='/Assets/Carrot2.svg' />
                  <div 
                  className='select'>
                      <select id="state" name="state">
                    <option className='form-option' value="---"></option>
                    <option className='form-option' value="Alabama">Alabama</option>
                    <option className='form-option' value="Alaska">Alaska</option>
                    <option className='form-option' value="Arizona">Arizona</option>
                    <option className='form-option' value="Arkansas">Arkansas</option>
                    <option className='form-option' value="California">California</option>
                    <option className='form-option' value="Colorado">Colorado</option>
                    <option className='form-option' value="Connecticut">Connecticut</option>
                    <option className='form-option' value="Delaware">Delaware</option>
                    <option className='form-option' value="District of Columbia">
                      District of Columbia
                    </option>
                    <option className='form-option' value="Florida">Florida</option>
                    <option className='form-option' value="Georgia">Georgia</option>
                    <option className='form-option' value="Guam">Guam</option>
                    <option className='form-option' value="Hawaii">Hawaii</option>
                    <option className='form-option' value="Idaho">Idaho</option>
                    <option className='form-option' value="Illinois">Illinois</option>
                    <option className='form-option' value="Indiana">Indiana</option>
                    <option className='form-option' value="Iowa">Iowa</option>
                    <option className='form-option' value="Kansas">Kansas</option>
                    <option className='form-option' value="Kentucky">Kentucky</option>
                    <option className='form-option' value="Louisiana">Louisiana</option>
                    <option className='form-option' value="Maine">Maine</option>
                    <option className='form-option' value="Maryland">Maryland</option>
                    <option className='form-option' value="Massachusetts">Massachusetts</option>
                    <option className='form-option' value="Michigan">Michigan</option>
                    <option className='form-option' value="Minnesota">Minnesota</option>
                    <option className='form-option' value="Mississippi">Mississippi</option>
                    <option className='form-option' value="Missouri">Missouri</option>
                    <option className='form-option' value="Montana">Montana</option>
                    <option className='form-option' value="Nebraska">Nebraska</option>
                    <option className='form-option' value="Nevada">Nevada</option>
                    <option className='form-option' value="New Hampshire">New Hampshire</option>
                    <option className='form-option' value="New Jersey">New Jersey</option>
                    <option className='form-option' value="New Mexico">New Mexico</option>
                    <option className='form-option' value="New York">New York</option>
                    <option className='form-option' value="North Carolina">North Carolina</option>
                    <option className='form-option' value="North Dakota">North Dakota</option>
                    <option className='form-option' value="Northern Marianas Islands">
                      Northern Marianas Islands
                    </option>
                    <option className='form-option' value="Ohio">Ohio</option>
                    <option className='form-option' value="Oklahoma">Oklahoma</option>
                    <option className='form-option' value="Oregon">Oregon</option>
                    <option className='form-option' value="Pennsylvania">Pennsylvania</option>
                    <option className='form-option' value="Puerto Rico">Puerto Rico</option>
                    <option className='form-option' value="Rhode Island">Rhode Island</option>
                    <option className='form-option' value="South Carolina">South Carolina</option>
                    <option className='form-option' value="South Dakota">South Dakota</option>
                    <option className='form-option' value="Tennessee">Tennessee</option>
                    <option className='form-option' value="Texas">Texas</option>
                    <option className='form-option' value="Utah">Utah</option>
                    <option className='form-option' value="Vermont">Vermont</option>
                    <option className='form-option' value="Virginia">Virginia</option>
                    <option className='form-option' value="Virgin Islands">Virgin Islands</option>
                    <option className='form-option' value="Washington">Washington</option>
                    <option className='form-option' value="West Virginia">West Virginia</option>
                    <option className='form-option' value="Wisconsin">Wisconsin</option>
                    <option className='form-option' value="Wyoming">Wyoming</option>
                  </select>
                  </div>
                </fieldset>
                <input className='form-input'
                  type="text"
                  name="role"
                  placeholder="    What is your role"
                />
              </form>
              <button className='form-dwn'>Submit Request</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
