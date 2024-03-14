import React from 'react'
import Fashionssidebar from './Fashionssidebar';
import Locationsidebar from './Locationsidebar';
import Menssidebar from './Menssidebar';
import Womenssidebar from './Womenssidebar';
import Cartsidebar from './Cartsidebar';

export default function Allsidebar() {
  return (
    <div>
      <Locationsidebar/>
      <Fashionssidebar/>
      <Menssidebar/>
      <Womenssidebar/>
      <Cartsidebar/>
    </div>
  )
}
