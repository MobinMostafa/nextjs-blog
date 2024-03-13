import React from 'react'

const Input = ({type,placeholder, ...other}) => {
  return (
     <input type={type} className="form-control" placeholder={placeholder} {...other} />
  )
}

export default Input