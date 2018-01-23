import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
   <header>
      <nav>
         <ul>
            <li>
               <NavLink to="/"> Home </NavLink>
            </li>
            <li>
               <NavLink to="/customers"> Customers </NavLink>
            </li>
            <li>
               <NavLink to="/objects"> Objects </NavLink>
            </li>
         </ul>
      </nav>
   </header>
);

export default Header;
