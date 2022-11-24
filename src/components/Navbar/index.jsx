import React from 'react'
import Logo from '../../images/logo.svg';
import PrimaryButtons from '../buttons/PrimaryButtons';
import SecondaryButton from '../buttons/SecondaryButtons';

export default function Navbar() {
  return (
    <div className='py-4 flex justify-between items-center'>
      <div className='py-4 flex'>
        <div className="flex mr-6">
          <img src={Logo} alt="logo nefa" />
        </div>
      </div>
        <nav className='flex'>
          <a href="#" className='mx-4'>Cryptocurrency</a>
          <a href="#" className='mx-4'>Exchanges</a>
          <a href="#" className='mx-4'>Watchlist</a>
          <a href="#" className='mx-4'>NFT</a>
          <a href="#" className='mx-4'>Portfolio</a>
          <a href="#" className='mx-4'>Product</a>
        </nav>
        <div className="flex">
          <SecondaryButton>
            Log In
          </SecondaryButton>
          <PrimaryButtons>
            Sign Up
          </PrimaryButtons>
        </div>
    </div>
  )
}
