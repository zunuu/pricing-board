import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Result } from 'postcss';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [userInfo, setUserInfo] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('i am error', error);
      })
  }
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl py-4 pb-0'>Welcome to my pricing club</h1>
      <Pricing></Pricing>
      <button onClick={handleGoogleSignIn} className='border-0 bg-indigo-400 px-5 py-3 my-10 rounded-2xl'>Sign In</button>
      <div className='bg-indigo-300 p-5'>
        <h2>User Name:</h2>
        <h5>email:</h5>
      </div>
    </div>
  );
}

export default App;
