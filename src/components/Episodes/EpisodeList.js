import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeSearchForm from "./EpisodeSearchForm";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);
  const [search, setSearch] = useState("");
  const handleChangeEp = event => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    axios 
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        console.log("Episode Response:", response)

        const episodes = response.data.results.filter(
          ep =>
            ep.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        setEpisode(episodes)          
      })
      .catch(error => {
        console.log("Failed Response", error)
      })
      }, [search]);

      return (
        <div> 
          <h2>Episodes</h2>
          <EpisodeSearchForm 
            episode={episode}
            handleChange={handleChangeEp}
          />
        </div> 
    );
  }  