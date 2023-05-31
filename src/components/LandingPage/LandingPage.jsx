import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />

      <h1>{heading}</h1>
      <div className="grid">
        <div className="grid-col grid-col_8">

          <p>
            We all been there! You get in your car, your ready to go with your partner or friends
            but you realize you dont know where to go because you dont know what to eat! Well
            Foodie-4-Foodies is here to help! Foodie-4-Foodies is a special app built for those undecided to what to eat.
            If you know what you want to eat just type it in the search. If you are not sure
            you can click on the suggestions box and re-roll until something strikes
            your interest!
          </p>
          <img className='foodies1' src='../foodies1.jpeg' />

        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
