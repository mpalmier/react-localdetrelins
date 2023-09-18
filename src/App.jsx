import './App.scss'
import Header from "./Component/Header.jsx";
import Galerie from "./Component/Galerie.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Picolocal from "./Component/Picolocal.jsx";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://localdetrelins.fr/wp/wp-json/wp/v2/galerie';

        axios.get(apiUrl)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <Router>
            <>
                <Header data={data}/>
                <Routes>
                    <Route path="/" element={<Galerie data={data} />} />
                    <Route path="/picolocal" element={<Picolocal />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
