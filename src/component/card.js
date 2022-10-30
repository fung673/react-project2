import React from "react";

export default function Card(props) {
 return (<div className="cards">
  <img src={require(`../images/${props.img}`)} className="image" />
  <div className="column">
   <nav className="firstline">
    <img src={require('../images/position.png')} className="logo-position"></img>
    <div className="location">{props.location}</div>
    <a href={props.googleMapsUrl} className="googlemap">View on Google Maps</a></nav>
   <h2>{props.title}</h2>
   <div className="date">{props.startDate} - {props.endDate}</div>
   <p className="description">{props.description}</p>




  </div>
 </div>)
}