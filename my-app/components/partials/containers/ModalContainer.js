import React from 'react'

function ModalContainer({children,isOpen,setIsOpen}) {
  if(!isOpen)return
  return (
    <div>{children}</div>
  )
}

export default ModalContainer