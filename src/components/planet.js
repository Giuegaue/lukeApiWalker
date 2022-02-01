import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Planet = (props) => {
  const [planet, setPlanet] = useState();
  const {id} = useParams();
  const [error, seError] = useState(false);


  useEffect(() => {
  axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res =>{setPlanet(res.data);
      console.log(res.data)
      seError(false);
    })
    .catch(err =>{console.log(err)}, seError(true))
  },[id]
  )
    
  return (
    <div>{error ? <h1>These are not the droids you are looking for</h1>
      : planet ? 
        <div>
        <h1>Name: {planet.name}</h1>
        <div>Climate: {planet.climate}</div>
        <div>Terrian: {planet.terrian}</div>
        <div>Surface Water: {planet.surface_water}</div>
        <p>Population: {planet.population}</p>
        </div>
      : <p>going</p>
      }
    </div>
  )
};

export default Planet;
