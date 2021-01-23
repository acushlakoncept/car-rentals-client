import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <BrowserRouter>
      <section className="call-action">
        <h4>Be where you want to be on time</h4>
        <p>
          <Link className="btn btn-oval" to="/register">Book your ride</Link>
        </p>
      </section>
    </BrowserRouter>
  );
}
