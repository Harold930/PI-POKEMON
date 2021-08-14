import React from 'react';
import { Link } from 'react-router-dom';
import pokebola from '../../img/pokemon-1.png'
import landing from './landingPage.module.css'

export default function LandingPage(){
    return (
        <div className={landing.landing}>
            <div className={landing.content}>
                <h2 className={landing.h2}>YOU ARE WELCOME</h2>
                <Link to = '/home' className={landing.pokebola}><img src={pokebola} width='100' height='100' /></Link>
            </div>
        </div>
    )
}