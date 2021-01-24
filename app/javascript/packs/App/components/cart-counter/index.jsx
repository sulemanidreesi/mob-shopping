import React from 'react'

function index({cartList}) {
  return (
    <div className="counter">
      <span>{cartList.length}</span>
    </div>
  )
}

export default index
