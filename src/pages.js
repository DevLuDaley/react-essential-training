import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

export const Home = () => {
    return(
    <div>
        <h1> [Home Landing Page]</h1>
        {/* "http://localhost:3000//about" */}
        <nav>
            <Link to="about"> about </Link>
            <br></br>
            <Link to="events"> events </Link>
            <br></br>
            <Link to="contact"> contact </Link>
        </nav>
    </div>)
}
export const About = () => {
    return(
    <div>
        <h1> [About] </h1>
        <Outlet />
    </div>)
}

export const Services = () => {
    return(
    <div>
        <h2> [Our Services] </h2>
    </div>)
}

export const CompanyHistory = () => {
    return(
    <div>
        <h2> [Company History] </h2>
    </div>)
}

export const Location= () => {
    return(
    <div>
        <h2> [Our Location] </h2>
    </div>)
}

export const Events = () => {
    return(
    <div>
        <h1> [Events] </h1>
    </div>)
}
export const Contact = () => {
    return(
    <div>
        <h1>[Contact] </h1>
    </div>)
}

export const Whoops404 = () => {
    let location = useLocation()
    console.log('🚀 ~ file: pages.js ~ line 39 ~ Whoops404 ~ location', location);
    
    return(
        <div>
            <h1> Sorry but a page for "{location.pathname}" does not exist</h1>
            
            Try the available links below
            <br></br>
            <br></br>
            
            <nav>
            <Link to="home"> home </Link>
            <br></br>
            <Link to="about"> about </Link>
            <br></br>
            <Link to="events"> events </Link>
            <br></br>
            <Link to="contact"> contact </Link>
        </nav>

        </div>
    )
}