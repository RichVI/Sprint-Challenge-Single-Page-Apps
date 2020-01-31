import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterSearchForm from "./CharacterSearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = event => {
    setSearch(event.target.value);
  }

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    useEffect(() => {
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("Character Response:", response)
        const characters = response.data.results.filter(
          character =>
            character.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        setCharacter(characters)
      })
      .catch(error =>{
        console.log("Failed Response", error)
      })
  }, [search]);

    return (
      <div> 
        <h2>Characters</h2>
          <CharacterSearchForm  
            character={character}
            handleChange={handleChange}
          />     
      </div> 
    );
  }
