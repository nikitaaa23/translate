import React from "react";
import UserCreate from "./UserCreate";
import {LangaugeStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
 
    render() {
        return (
        <div className="ui container">
            <LangaugeStore>
            <LanguageSelector  />
            <ColorContext.Provider value = "red">
           
            <UserCreate />
            </ColorContext.Provider>
            </LangaugeStore>
        </div>
        );
    }
}

export default App;