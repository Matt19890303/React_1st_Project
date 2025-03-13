import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase';

export const SignIn = () => {
  // Sign in with Google popup
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  
  return (
    <div>
      <div>SignIn Page</div>
      <button onClick={logGoogleUser}>
        Signin with Google popup
      </button>
    </div>
    
  )
}
