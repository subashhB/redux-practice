import React from 'react';
import {useSelector} from 'react-redux';

const Navbar = () =>{
    const amount = useSelector(state => state.amount)
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Bank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>
                <button disabled={true} className="btn btn-outline-primary ms-auto me-3 my-2"> Your Balance: {amount}</button>
            </ul>
        </div>
    )
}

export default Navbar