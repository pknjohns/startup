import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Generator } from './generator/generator';
import { Histories } from './histories/histories';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header className='container-fluid'>
                    <nav className='navbar fixed-top navbar-dark'>
                        <div className='navbar-brand'>
                            The Date Idea Generator
                        </div>
                        <menu className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to=''>
                                    Login
                                </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='generator'>
                                        Generator
                                    </NavLink>
                                </li>
                            )}
                            {authState === AuthState.Authenticated && (
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='histories'>
                                        Local Dating History
                                    </NavLink>
                                </li>
                            )}
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='about'>
                                    About
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
                
                <Routes>
                    <Route 
                        path='/'
                        element={
                            <Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        }
                        exact
                    />
                    <Route path='/generator' element={<Generator userName={userName}/>} />
                    <Route path='/histories' element={<Histories userName={userName}/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                
                <footer className='bg-dark text-white-50'>
                    <div className='container-fluid'>
                        <span className='text-reset'>Parker Johns</span>
                        <a className='text-reset' href='https://github.com/pknjohns/startup.git'>
                        Source
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;