import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import ImgMediaCard2 from './Card2';
import { getDetails } from "./CardDetails";
import './style.css'


export const Cards = () => {

    const [cards, setCards] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        setCards(getDetails());
    }, []);

    const getData = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="d-flex justify-content-end Cards">
                <TextField
                    id="standard-basic"
                    label="Search"
                    color="secondary"
                    onChange={getData}
                />
            </div>
            <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
                {cards
                    .filter((card) =>
                        card.title.toLowerCase().includes(filter.toLowerCase()) ||
                        card.description.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((card) => (
                        <div key={card.id}>
                            <ImgMediaCard2
                                className="d-flex flex-wrap"
                                card={card}
                            />
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
}







