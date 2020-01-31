import React from "react";
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

//styling
const imgStyle = { maxWidth: "100%", 
                     border: "solid 1px black"
}

const cardStyle = {
    width: "100%", 
    border: "solid 1px black",
    textAlign: "center" ,
    backgroundColor: "white",
    color: "black"
}

export default function CharacterCard(props){
  console.log("CharacterCard", props)

  return (
    <Card style={cardStyle}>
      <CardImg style={imgStyle} src={props.image}/>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.species}</CardText>
    </Card>
  )
}