import React from 'react';
import Card from "./Card";
import data from "../data"
function Slider() {
    const dataCard = data.map(list => {
        return (
            <Card
                key = {list.id}
                list = {list}
            />
        )
    })

    return (
        <section>
        <div className="slider">
            {dataCard}
        </div>
        </section>
    );
}


export default Slider;