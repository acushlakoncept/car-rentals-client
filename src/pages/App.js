import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.scss';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import FeatureSection from '../components/FeatureSection';

function App() {
  return (
    <Container fluid="sm" className="mobile-width">
      <Header />
      <AboutSection />
      <FeatureSection />
    </Container>
  );
}

export default App;
