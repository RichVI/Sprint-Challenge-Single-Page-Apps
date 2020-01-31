import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

//styling
const cardStyle = {
  width: "100%", 
  border: "solid 1px black",
  textAlign: "center" ,
  backgroundColor: "white",
  color: "black"
}


export default function EpisodeCard(props){
  console.log("EpisodeCard", props)
  
  return (
    <Card style={cardStyle}>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.episode}<br/>{props.airdate}</CardText>
    </Card>
  )
}