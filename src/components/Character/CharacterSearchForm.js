import React from "react";
import CharacterCard from "./CharacterCard";
import "../../index.css"

export default function CharacterSearchForm(props) {
  
  const listStyle = {
    display: "grid", 
    gridGap: "2%",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
    padding: "2%"}
    
  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={props.handleChange}
          value={props.search}
          name="name"
          placeholder="Search Character"
          autoComplete="off" />
      </form>

     <div className="character-list" style={listStyle}>
        {props.character.map(character => {
          return (
            <CharacterCard 
              key={character.id}
              name={character.name}
              image={character.image}
              species={character.species}
            />
            );    
          })}
      </div>
    </section> 
  );
}
