import logo from './logo.svg';
import './App.module.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import data from "./mock.json";
import {useState} from "react";
import config from "./config.json"

function App() {

     // localStorage.removeItem('panels')

    if (localStorage.getItem('panels')){
        data = JSON.parse(localStorage.getItem('panels'))
    }

    const[panels, setPanels]=useState(data)
    const[refreshPanels, setRefreshPanels]=useState(false)

    function toggleRefreshPanels(){
        setRefreshPanels(!refreshPanels)
    }

    function setPanelsWithSave(newPanels){
        setPanels(newPanels)
        localStorage.setItem('panels', JSON.stringify(newPanels))
    }

    return (
        <>
            <Header/>
            <Main panels={panels} toggleRefreshPanels={toggleRefreshPanels} setPanels={setPanelsWithSave}/>
            <Footer panels={panels} config={config}/>
        </>
    );
}

export default App;
