import React from 'react'
import TodayDealssidebar from './TodayDealssidebar';
import Bestsellersidebar from './Bestsellersidebar';
import Fashionssidebar from './Fashionssidebar';
import Giftideassidebar from './Giftideassidebar';
import Locationsidebar from './Locationsidebar';
import Menssidebar from './Menssidebar';
import Womenssidebar from './Womenssidebar';
import Cartsidebar from './Cartsidebar';

export default function Allsidebar() {
  return (
    <div>
      <Locationsidebar/>
      <Bestsellersidebar/>
      <Fashionssidebar/>
      <Giftideassidebar/>
      <Menssidebar/>
      <TodayDealssidebar/>
      <Womenssidebar/>
      <Cartsidebar/>
    </div>
  )
}
