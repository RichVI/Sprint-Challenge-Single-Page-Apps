import React from "react";
import LocationCard from "./LocationCard";

export default function LocationSearchForm(props) {
    console.log(`this is LocationSearchForm props; `, props)

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
                placeholder="Search Location"
                autoComplete="off" />
             </form>

          <div style={listStyle}>
            {props.location.map(items => {
              return (
                <LocationCard 
                  key={items.id}
                  name={items.name}
                  location={items.type}
                />
              );    
            })}
      </div>
    </section>
 ); 
}