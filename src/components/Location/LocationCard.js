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


export default function LocationCard(props) {
  console.log("LocationCard", props)

  return (
    <Card style={cardStyle}>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.location}</CardText>
    </Card>
  )
}