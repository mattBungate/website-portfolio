import React from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="Home">
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
