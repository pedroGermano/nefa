import React from 'react'

export default function PrimaryButtons({ children, onClick, ...props}) {
  return (
    <button onClick={onClick} className='bg-primary text-white p-6' {...props}>
      {children}
    </button>
  )
}
