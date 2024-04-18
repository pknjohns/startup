import React from 'react';
import './generator.css';

import {Users} from './users';
import {dropDown} from './dropDown';

export function Generator(props) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className='body bg-dark text-light'>This is where I would've put my date idea generator if I had had enough time to implement it.</div>
      <Users userName={props.userName} />
      <dropDown userName={props.userName} />
    </main>
  );
}