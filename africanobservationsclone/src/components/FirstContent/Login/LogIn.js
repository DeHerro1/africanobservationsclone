import React, {useState} from 'react';
import './LogIn.css';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState(false);

    function InputChangeHandler(e) {
        let input = email;
        input = e.target.value;
        setEmail(input);
    }

    const logData = {
        'email': email,
        'password': password
    }

    function loginData() {
        let url = 'https://api.africanobservations.com/api/login';
        const data = {
            method: 'POST',
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(logData)
          };
          fetch(url, data)
          .then(res => console.log(res.data, 'succeeful'))
          .catch(err => console.log(err, 'unsuccessful'))
    }

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
        if(password.length > 2) {
            setVerifyPassword(false);
        }else {
          setVerifyPassword(true);
        }
        if(email !== "" && password !== "") {
        loginData();
        }

    }

    const passwordChange = (e) => {
        let input = password;
        input = e.target.value;
        setPassword(input);
      }

    return (
        <div className='login'>
            <div className="signup">
          <div className="form">
            <h2>Login</h2>
            <Form>
  <Form.Group>
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
      {verifyPassword && <p className="error">* Enter password</p>}
  </Form.Group>
    <Button onClick={handleSubmit}  outline="danger" className="signup_button" type="submit">
        LOGIN
    </Button>
    </Form>
      <section className="login_option">
        <p>Already have an account? <Link className="option" to="/signup">Sign up here</Link></p>
        <p>Go to <Link className="option" to="/">Home</Link></p>
      </section>
</div>
            <div className="empty_div"></div>
        </div>
        </div>
    )
}

export default LogIn
