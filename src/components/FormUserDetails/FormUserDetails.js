import {Component} from 'react';
import './FormUserDetails.css';

class FormUserDetails extends Component {
  contunue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange} = this.props;
    return(
      <div>
        <div className='header-conatainer'>
          Enter User Details
        </div>
        <form onSubmit={this.contunue} className='fields-container'>
          <div className='input-container'>
            <div>First Name</div>
            <input type='text'
                   required
                   placeholder='Enter Your Frst Name'
                   onChange={handleChange('firstName')}
                   value={values.firstName}/>
          </div>
          <div className='input-container'>
            <div>Last Name</div>
            <input type='text'
                   required
                   placeholder='Enter Your Last Name'
                   onChange={handleChange('lastName')}
                   value={values.lastName}/>
          </div>
          <div className='input-container'>
            <div>Email</div>
            <input type='email'
                   required
                   placeholder='Enter Your Email'
                   onChange={handleChange('email')}
                   value={values.email}/>
          </div>
          <button className='button-container'>CONTINUE</button>
        </form>
      </div>
    );
  }
}

export default FormUserDetails;
