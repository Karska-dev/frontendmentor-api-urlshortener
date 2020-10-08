import React from 'react';
import Button from './Button';

const Hero = () => (
  <div className="Hero">
    <img src={require("../images/illustration-working.svg")} alt="Logo"/>
    <h1>
      More than just shorter links
    </h1>
    <div>
      Build your brand’s recognition and get detailed insights on how your
      links are performing.
    </div>
    <Button title="Get Started" />
  </div>
)

export default Hero;