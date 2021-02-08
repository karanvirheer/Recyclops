import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Recyclops.png'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<>
            <div className="homepage">

                <img id = "logo" src={Logo} alt="Logo" />
                <h1>Recyclops</h1>

                <p>Every 1/4 items placed in a recycling bin are not recyclable. Nearly 75% of waste is recyclable, yet only 34% is recycled. Waste management is complex but Recyclops makes it easy by using an image classifier that helps people sort their trash into the correct bins.</p>
                

                <Link to="/demo">
                    <button type="button" id="button-homepage">Demo</button>
                </Link>
                <Link to="/about">
                    <button type="button" id="button-homepage">Learn More</button>
                </Link>
                <p>created by <a id="at" href="https://github.com/tsaruggan">@tsaruggan</a> and <a id="at" href="https://github.com/karanvirheer">@karanvirheer</a></p>
                <p id="hashtags">#MacHacks2021 #BestEnvironmentalHack</p>
            </div>
        </>)
    }
}

export default HomePage