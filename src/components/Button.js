import React from 'react';

const Button = (props) => {
  const title = props.title;

  return (<div className="Button">
    <p>
      {title}
    </p>
  </div>)
}

export default Button;