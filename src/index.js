// Library
import React from "react";
import ReactDOM from 'react-dom/client';

// Css
import './index.css';


// Component
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Nav/>
  <Content/>
  <Footer/> 
  </>
);