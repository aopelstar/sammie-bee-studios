import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';


export default function Header() {
    return (
        <div className="header-sub-menu">
                <Link to ='/bio'><div>bio</div></Link>
                <div>blog</div>
                <div>promotions</div>
                <Link to ='/gallery'><div>gallery</div></Link>
                <div>shop</div>
                <div>contact</div>
            </div>
    )
}