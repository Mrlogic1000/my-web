import React from 'react'

function ListIcon({icon,title,content}) {
  return (
    <div className="item">

    <div className="item-icon">
        <div className="icon">
            {icon}
        </div>
    </div>

    <div className="item-content">
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
</div>
  )
}

export default ListIcon