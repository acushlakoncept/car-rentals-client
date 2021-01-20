import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.scss';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';

function App() {
  return (
    <Container fluid="sm" className="mobile-width">
      <Header />
      <AboutSection />
    </Container>
  );
}

export default App;
