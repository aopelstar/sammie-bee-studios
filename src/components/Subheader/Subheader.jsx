import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';


export default function Header() {
    return (
        <div className="header-sub-menu">

                <Link to ='/bio'><div>bio</div></Link>
                <Link to ='/blog'><div>blog</div></Link>
                <Link to ='/promotions'><div>promotions</div></Link>
                <Link to ='/gallery'><div>gallery</div></Link>
                <Link to ='/shop'><div>shop</div></Link>
                

            </div>
    )
}