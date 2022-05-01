import {Component} from 'react';

class FormPersonalDetails extends Component {
  contunue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleChange} = this.props;
    return(
      <div>
        <div className='header-conatainer'>
          Enter Personal Details
        </div>
        <form onSubmit={this.contunue} className='fields-container'>
          <div className='input-container'>
            <div>Occupation</div>
            <input type='text'
                   required
                   placeholder='Enter Your Occupation'
                   onChange={handleChange('occupation')}
                   value={values.occupation}/>
          </div>
          <div className='input-container'>
            <div>City</div>
            <input type='text'
                   required
                   placeholder='Enter Your City'
                   onChange={handleChange('city')}
                   value={values.city}/>
          </div>
          <div className='input-container'>
            <div>Bio</div>
            <input type='text'
                   required
                   placeholder='Enter Bio'
                   onChange={handleChange('bio')}
                   value={values.bio}/>
          </div>
          <button onClick={this.back} className='button-container'>BACK</button>
          <button className='button-container'>CONTINUE</button>
        </form>
      </div>
    );
  }
}

export default FormPersonalDetails;
