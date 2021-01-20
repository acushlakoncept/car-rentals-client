import React from 'react';

export default function Footer() {
  return (
    <section className="about-section footer">
      <h2 className="about-section__primary">Car Rentals </h2>
      <p>
        Plot 1 Unit F, Ewet Housing Estate
        {' '}
        <br />
        +2348035336234
      </p>
      <p>
        Car Rentals
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>
    </section>
  );
}
