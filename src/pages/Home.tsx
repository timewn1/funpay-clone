import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Nav from '../components/home/Nav';

import { Catigories, Letters } from '../assets/catigories';

import './home.scss';

interface ICatigory {
    name: string;
    detail: string[];
}

interface ICatigoies {
    [key: string]: ICatigory[];
}

const Home = () => {
    const [catigories, setCatigories] = useState<ICatigoies>(Catigories);

    const move = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <div className='container'>
            <Navbar />
            <main>
                <Nav onclick={(id: string) => move(id)} />
                <div className='main'>
                    {
                        Letters.map((ele: string, ind: number) => (
                            <div key={ind} id={`letter${ele}`}>
                                <p>{ele}</p>
                                <div className='panel-group'>
                                    {
                                        catigories[ele].map((e: ICatigory, i: number) => (
                                            <div key={i}>
                                                <h3>{e.name}</h3>
                                                <span>
                                                    {
                                                        e.detail.map((d, index) => (
                                                            <>
                                                                <Link key={index} to='#'>{d}</Link>{index !== e.detail.length - 1 && <span>&#8729;</span>}
                                                            </>
                                                        ))
                                                    }
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main >
            <Footer />
        </div>
    );
}

export default Home;