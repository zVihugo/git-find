// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'

const Itemlist = ({title, description, url}) => {
  return (
    <div className="item-list">
        <a href={url} target='_blank'><strong>{title}</strong></a>
        <p>{description}</p>
    </div>
  )
}

export  default Itemlist