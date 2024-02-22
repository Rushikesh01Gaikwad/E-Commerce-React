import React from 'react'
import SignInPopup from './SignInPopup';
import SignupPopup from './SignupPopup';
import LangPopup from './LangPopup';

export default function Allpopup() {
  return (
    <div>
      <SignInPopup/>
      <SignupPopup/>
      <LangPopup/>
    </div>
  )
}
