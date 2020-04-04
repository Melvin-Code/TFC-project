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
                     {/* <p className="state">State</p>  */}
                     <select id="state" name="state">
                    <option className='form-option' value="---">&#160; &#160; State</option>
                    <option className='form-option' value="Alabama">&#160; &#160; Alabama</option>
                    <option className='form-option' value="Alaska">&#160; &#160; Alaska</option>
                    <option className='form-option' value="Arizona">&#160; &#160; Arizona</option>
                    <option className='form-option' value="Arkansas">&#160; &#160; Arkansas</option>
                    <option className='form-option' value="California">&#160; &#160; California</option>
                    <option className='form-option' value="Colorado">&#160; &#160; Colorado</option>
                    <option className='form-option' value="Connecticut">&#160; &#160; Connecticut</option>
                    <option className='form-option' value="Delaware">&#160; &#160; Delaware</option>
                    <option className='form-option' value="District of Columbia">&#160; &#160; 
                      District of Columbia
                    </option>
                    <option className='form-option' value="Florida">&#160; &#160; Florida</option>
                    <option className='form-option' value="Georgia">&#160; &#160; Georgia</option>
                    <option className='form-option' value="Guam">&#160; &#160; Guam</option>
                    <option className='form-option' value="Hawaii">&#160; &#160; Hawaii</option>
                    <option className='form-option' value="Idaho">&#160; &#160; Idaho</option>
                    <option className='form-option' value="Illinois">&#160; &#160; Illinois</option>
                    <option className='form-option' value="Indiana">&#160; &#160; Indiana</option>
                    <option className='form-option' value="Iowa">&#160; &#160; Iowa</option>
                    <option className='form-option' value="Kansas">&#160; &#160; Kansas</option>
                    <option className='form-option' value="Kentucky">&#160; &#160; Kentucky</option>
                    <option className='form-option' value="Louisiana">&#160; &#160; Louisiana</option>
                    <option className='form-option' value="Maine">&#160; &#160; Maine</option>
                    <option className='form-option' value="Maryland">&#160; &#160; Maryland</option>
                    <option className='form-option' value="Massachusetts">&#160; &#160; Massachusetts</option>
                    <option className='form-option' value="Michigan">&#160; &#160; Michigan</option>
                    <option className='form-option' value="Minnesota">&#160; &#160; Minnesota</option>
                    <option className='form-option' value="Mississippi">&#160; &#160; Mississippi</option>
                    <option className='form-option' value="Missouri">&#160; &#160; Missouri</option>
                    <option className='form-option' value="Montana">&#160; &#160; Montana</option>
                    <option className='form-option' value="Nebraska">&#160; &#160; Nebraska</option>
                    <option className='form-option' value="Nevada">&#160; &#160; Nevada</option>
                    <option className='form-option' value="New Hampshire">&#160; &#160; New Hampshire</option>
                    <option className='form-option' value="New Jersey">&#160; &#160; New Jersey</option>
                    <option className='form-option' value="New Mexico">&#160; &#160; New Mexico</option>
                    <option className='form-option' value="New York">&#160; &#160; New York</option>
                    <option className='form-option' value="North Carolina">&#160; &#160; North Carolina</option>
                    <option className='form-option' value="North Dakota">&#160; &#160; North Dakota</option>
                    <option className='form-option' value="Northern Marianas Islands">&#160; &#160; 
                      Northern Marianas Islands
                    </option>
                    <option className='form-option' value="Ohio">&#160; &#160; Ohio</option>
                    <option className='form-option' value="Oklahoma">&#160; &#160; Oklahoma</option>
                    <option className='form-option' value="Oregon">&#160; &#160; Oregon</option>
                    <option className='form-option' value="Pennsylvania">&#160; &#160; Pennsylvania</option>
                    <option className='form-option' value="Puerto Rico">&#160; &#160; Puerto Rico</option>
                    <option className='form-option' value="Rhode Island">&#160; &#160; Rhode Island</option>
                    <option className='form-option' value="South Carolina">&#160; &#160; South Carolina</option>
                    <option className='form-option' value="South Dakota">&#160; &#160; South Dakota</option>
                    <option className='form-option' value="Tennessee">&#160; &#160; Tennessee</option>
                    <option className='form-option' value="Texas">&#160; &#160; Texas</option>
                    <option className='form-option' value="Utah">&#160; &#160; Utah</option>
                    <option className='form-option' value="Vermont">&#160; &#160; Vermont</option>
                    <option className='form-option' value="Virginia">&#160; &#160; Virginia</option>
                    <option className='form-option' value="Virgin Islands">&#160; &#160; Virgin Islands</option>
                    <option className='form-option' value="Washington">&#160; &#160; Washington</option>
                    <option className='form-option' value="West Virginia">&#160; &#160; West Virginia</option>
                    <option className='form-option' value="Wisconsin">&#160; &#160; Wisconsin</option>
                    <option className='form-option' value="Wyoming">&#160; &#160; Wyoming</option>
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
