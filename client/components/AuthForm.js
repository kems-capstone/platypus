import React, {Component} from 'react';
import {logInThunk} from '../store/user';
import {connect} from 'react-redux';
import history from '../history';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    console.log('Props in constructor', props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await this.props.logInThunk({email, password});
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <p>This is the auth form</p>
        <div>
          <form onSubmit={this.handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit">Login/Sign up</button>
            </div>
          </form>
        </div>
        {this.props.user.id ? (
          <p>There is a user</p>
        ) : (
          <p>There is NOT a user</p>
        )}
        {console.log(this.props)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInThunk: formData => dispatch(logInThunk(formData))
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

// import React from 'react';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {auth} from '../store';

// /**
//  * COMPONENT  WE SHOULD CHANGE THE HTML
//  */
// const AuthForm = props => {
//   const {name, displayName, handleSubmit, error} = props;

//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor="email">
//             <small>Email</small>
//           </label>
//           <input name="email" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <small>Password</small>
//           </label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//       <a href="/auth/google">{displayName} with Google</a>
//     </div>
//   );
// };

// /**
//  * CONTAINER
//  *   Note that we have two different sets of 'mapStateToProps' functions -
//  *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
//  *   function, and share the same Component. This is a good example of how we
//  *   can stay DRY with interfaces that are very similar to each other!
//  */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   };
// };

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.user.error
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const formName = evt.target.name;
//       const email = evt.target.email.value;
//       const password = evt.target.password.value;
//       dispatch(auth(email, password, formName));
//     }
//   };
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

// /**
//  * PROP TYPES
//  */
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// };
