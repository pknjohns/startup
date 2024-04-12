import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
            The Date Idea Generator
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='index.html'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='play.html'>Date Idea Generator</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='scores.html'>Local Dating Histroy</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>About</a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Parker Johns</span>
            <a className='text-reset' href='https://github.com/pknjohns/startup.git'>
              Source
            </a>
          </div>
        </footer>
      </div>
    );
  }