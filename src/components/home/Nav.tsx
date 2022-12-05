import React from 'react';
import { Link } from 'react-router-dom';

import { Letters } from '../../assets/catigories';

import './nav.scss';

const Nav = (props: any) => {
    return (
        <div id='nav'>
            {
                Letters.map((ele, ind) => (
                    <span key={ind} onClick={() => props.onclick(`letter${ele}`)}><Link to={`#`}>{ele}</Link></span>
                ))
            }
        </div >
    );
}

export default Nav;