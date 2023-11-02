import React from 'react';
import '../App.css';




function Card(props) {
    // const {coverImg, rating, reviewCount, price, title, openSpots, location} = props;
    let badgeText
    if (props.list.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.list.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.list.coverImg} alt="image" className="card--image"/>
            <div className="card--stats">
                <img src="/star.png" alt="star" className="card--star"/>
                <span>{props.list.stats.rating}</span>
                <span className="gray"> ({props.list.stats.reviewCount} .)</span>
                <span className="gray"> {props.list.location}</span>
            </div>
            <p>{props.list.title}</p>
            <p><span className="bold">From ${props.list.price}</span> / person</p>
        </div>
    );
}

export default Card;