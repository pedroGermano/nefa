import React from 'react'

export default function PrimaryButtons({ children, onClick, ...props}) {
  return (
    <button 
       onClick={onClick} 
       className='bg-primary rounded-full text-white py-4 px-8'
       {...props}
       >
      {children}
    </button>
  )
}
