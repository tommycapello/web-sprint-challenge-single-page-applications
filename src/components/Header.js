import React from 'react';
import {Link} from 'react-router-dom';


export default function Header(){

    return(
        <header>
            <h1>Lambda Eats</h1>
            <div>
                <Link className='home' to='/'>Home</Link>
                <a href='#'>Help</a>
            </div>
        </header>)
}