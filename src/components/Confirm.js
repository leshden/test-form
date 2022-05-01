import {Component} from 'react';

class Confirm extends Component {
  contunue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;

    return(
      <div>
        <div className='header-conatainer'>
          Confirm User Data
        </div>
        <form onSubmit={this.contunue} className='fields-container'>
          <div className='input-container'>
            <div>First Name</div>
            <div>{firstName}</div>
          </div>
          <div className='input-container'>
            <div>Last Name</div>
            <div>{lastName}</div>
          </div>
          <div className='input-container'>
            <div>Email</div>
            <div>{email}</div>
          </div>
          <div className='input-container'>
            <div>Occupation</div>
            <div>{occupation}</div>
          </div>
          <div className='input-container'>
            <div>City</div>
            <div>{city}</div>
          </div>
          <div className='input-container'>
            <div>Bio</div>
            <div>{bio}</div>
          </div>
          <button onClick={this.back} className='button-container'>BACK</button>
          <button className='button-container'>CONFIRM & CONTINUE</button>
        </form>
      </div>
    );
  }
}

export default Confirm;
