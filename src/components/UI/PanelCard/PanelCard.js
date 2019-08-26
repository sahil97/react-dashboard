import React from 'react';
import './PanelCard.css'


const PanelCard = (props) => {
  return (
    <div className="PanelCard">
      {props.children}
    </div>
  )
}

export default PanelCard;