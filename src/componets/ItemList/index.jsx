// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'

const Itemlist = ({title, description}) => {
  return (
    <div className="item-list">
        <strong>{title}</strong>
        <p>{description}</p>
    </div>
  )
}

export  default Itemlist