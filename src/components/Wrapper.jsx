import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='max-w-5xl mx-auto px-6 flex items-center justify-between'>{children}</div>
  )
}

export default Wrapper