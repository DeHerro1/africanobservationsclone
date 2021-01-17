import React, {useState} from 'react';
import {Form, Button } from 'react-bootstrap';
import './SignUp.css';
import {Link} from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [verifyFirstName, setVerifyFirstName] = useState(false);
    const [verifyLastName, setVerifyLastName] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState(false);
    const [doubleVerifyPasword, setDoubleVerifyPassword] = useState(false);
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');

    // email input value
    function InputChangeHandler(e) {
      let input = email;
      input = e.target.value;
      setEmail(input);
    }

  function dateCheck(e) {
    let input = email;
    input = e.target.value;
    setDate(input);
}

  const userData = [{
    'firstName': firstName,
    'lastName': lastName,
    'email': email,
    'password': password,
    'date_of_birth': date,
    'gender': gender
  }];

  let url = 'https://api.africanobservations.com/api/signup';

 function sendData() {
   const data = {
     method: 'POST',
     mode: 'no-cors',
     headers: {'Content-Type': 'application/json'},
     body:JSON.stringify(userData)
   };
   fetch(url, data)
   .then(res => console.log(res.data, 'succeeful'))
   .catch(err => console.log(err, 'unsuccessful'))
 };

  function handleSubmit(e) {
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   let isValid = pattern.test( email );
    if(isValid) {
        setVerified(false);
    }
    else {
      setVerified(true);
    }
    if(firstName.length > 1) {
      setVerifyFirstName(false);
    }
    else {
      setVerifyFirstName(true);
    }
    if(lastName.length > 1) {
      setVerifyLastName(false);
    }
    else {
      setVerifyLastName(true);
    }
    if(password.length > 2) {
        setVerifyPassword(false);
    }
    else {
      setVerifyPassword(true);
    }
    if(password === confirmPassword) {
      setDoubleVerifyPassword(false);
  }
  else {
    setDoubleVerifyPassword(true);
  }
  if(firstName !== '' &&
   lastName !== '' && 
  password !== '' &&
  confirmPassword !== '' &&
  date !== ''&& 
  gender !== '') {
    console.log('data sent');
    sendData();
  }
  
}

  const firstNameChange = (e) => {
    let input = firstName;
    input = e.target.value;
    setFirstName(input);
}

const lastNameChange = (e) => {
  let input = lastName;
  input = e.target.value;
  setLastName(input);
}

const passwordChange = (e) => {
  let input = password;
  input = e.target.value;
  setPassword(input);
}

const confirmPasswordChange = (e) => {
  let input = confirmPassword;
  input = e.target.value;
  setConfirmPassword(input);
}

const handleCheck = (e) => {
  let check = e.target.value;
  setGender(check);
}

    return (
        <div className="signup">
          <div className="form">
            <h2>Sign Up</h2>
            <Form>
  <Form.Group>
    <Form.Control 
     className="signUp_input"
     onChange={firstNameChange}
     type="text"
     placeholder='First name'/>
    {verifyFirstName && <p className="error">* Enter your first name</p>}
    <Form.Control 
     className="signUp_input"
     onChange={lastNameChange}
     type="text"
     placeholder='Last name'/>
    {verifyLastName && <p className="error">* Enter your last name</p>}
    <Form.Control 
      className='signUp_input'
      value={email}
      onChange={InputChangeHandler}
      type="email" 
      placeholder="Enter email"/>
      {verified &&<p className="error">* Enter a valid email</p>}
      <Form.Control 
      className="signUp_input"
      type="password" 
      value={password}
      onChange={passwordChange}
      placeholder="Password" />
      {verifyPassword && <p className="error">* Enter a strong password</p>}
       <Form.Control 
      className="signUp_input"
      type="password" 
      value={confirmPassword}
      onChange={confirmPasswordChange}
      placeholder="Confirm password" />
      {doubleVerifyPasword && <p className="error"> password does not match</p>}
      <Form.Control onChange={dateCheck} value={date} type="date" />
        <Form.Group className="genders">
        <Form.Label >Gender</Form.Label>
        <Form.Group className="gender">
          <Form.Check type='radio' onChange={handleCheck} label="Female" value="female" name="formHorizontalRadios"/>
        <Form.Check type='radio' onChange={handleCheck} value="male" label="Male" name="formHorizontalRadios" />
        </Form.Group>
        
      </Form.Group>
  </Form.Group>
    <Button onClick={handleSubmit}  outline="danger" className="signup_button" type="submit">
        REGISTER
    </Button>
    </Form>
      <section className="login_option">
        <p>Already have an account? <Link className="option" to="/login">Login here</Link></p>
        <p>Go to <Link className="option" to="/">Home</Link></p>
      </section>
</div>
            <div className="empty_div"></div>
        </div>
    )
}

export default SignUp