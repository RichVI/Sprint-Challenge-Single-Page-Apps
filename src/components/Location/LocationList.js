import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationSearchForm from "./LocationSearchForm";

export default function LocationsList() {
    // TODO: Add useState to track data from useEffect
    const [location, setLocation] = useState([]);
    const [search, setSearch] = useState("");
    const handleChangeLoc = event => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                console.log("Location Response:", response)

                const locations = response.data.results.filter(
                    loc => 
                    loc.name
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                setLocation(locations)
            })
            .catch(error => {
                console.log("Failed Response", error)
            })
         }, [search]);

        return (
            <div>
                <h2>Location</h2>
                <LocationSearchForm 
                    location={location}
                    handleChange={handleChangeLoc}
                />
            </div>
        );
    }