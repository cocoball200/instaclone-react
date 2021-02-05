import React from "react";

import Navigation from "../../Components/Navigation/Navigation";
import MainPage from "./MainPage/MainPage";

import "./Main.scss";


class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <Navigation />
                <MainPage />
            </div>
        )
    }
}

export default Main;