import React from "react";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeSearchForm(props) {
  console.log(`this is episodesearchform props; `, props)

 //Style 
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
        placeholder="Search Episode"
        autoComplete="off" />
     </form>
    
     <div style={listStyle}>
        {props.episode.map(items => {
          return (
            <EpisodeCard 
              key = {items.id}
              name = {items.name}
              episode = {items.episode}
              airdate = {items.air_date}
            />
            );    
          })}
      </div>
    </section> 
  );
}