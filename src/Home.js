import React from 'react';
import {useNavigate} from "react-router-dom";
import emirateslogo from "./assets/emirateslogo.png";
import flydubailogo from "./assets/flydubailogo.png";
import logo from "./assets/logodubairlines.png";
import LogoSmall from "./components/Picture/LogoSmall";
import Service from "./components/Service/Service";


function Home() {

    const navigate = useNavigate();


    return (
        <>
            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoSmall
                        img={logo}
                        imgTitle="logo"
                        onClick={() => navigate('/')}
                    />

                    {/*<h1 className="page-title">dubairlines.com</h1>*/}

                    <div className="grid-service-container">

                        <Service
                            link={`https://www.flydubai.com/`}
                            img={flydubailogo}
                            children="Fly Dubai"
                        />

                        <Service
                            link={`https://www.emirates.com/`}
                            img={emirateslogo}
                            children="Emirates"
                        />

                    </div>
                </div>
            </main>

        </>
    );
}

export default Home;
