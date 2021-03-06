import React from 'react';
import './Button.css';

const ActionButton = (props) => {
   return(
     <div className={props.buttonStyle}>
       <p>{props.text}</p>
     </div>
   );
};

export default ActionButton;