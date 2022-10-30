import React from "react";
import Header from './component/header'
import './App.css'
import data from './data'
import Card from "./component/card"


export default function App() {
 const cards = data.map(item => {
  return (
   <Card
    title={item.title}
    img={item.imageUrl}
    location={item.location}
    googleMapsUrl={item.googleMapsUrl}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description} />)
 })

 return (<div>
  <Header />
  {cards}
 </div>)
}