import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Result } from 'postcss';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [userInfo, setUserInfo] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUserInfo(result.user)
        console.log(result.user);
      })
      .catch(error => {
        console.log('i am error', error);
      })
  }
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo({});

      })
      .catch((error) => {
        setUserInfo({});

      });

  }
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl py-4 pb-0'>Welcome to my pricing club</h1>
      <Pricing></Pricing>

      <div>
        {
          userInfo.email ?
            <button onClick={handleGoogleSignOut} className='border-0 bg-indigo-400 px-5 py-3 my-10 rounded-2xl'>Sign Out</button>

            :

            <button onClick={handleGoogleSignIn} className='border-0 bg-indigo-300 px-5 py-3 my-10 rounded-2xl'>Sign In</button>

        }
      </div>


      <div className='bg-indigo-300 p-5 font-bold'>
        <h2>Username: {userInfo.displayName}</h2>
        <h5>email: {userInfo.email}</h5>
      </div>
    </div>
  );
}

export default App;
