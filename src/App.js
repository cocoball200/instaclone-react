import React from "react";
import Login from "./pages/Login/Login";
import Routes from "./Routes";
import "./styles/common.scss"

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Login />
            </Routes>
        )
    }
}

export default App;