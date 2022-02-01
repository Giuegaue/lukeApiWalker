import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Planet = (props) => {
  const [planet, setPlanet] = useState()
  const {id} = useParams()


  useEffect(() => {
  axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res =>{setPlanet(res.data);
      console.log(res.data)
    })
    .catch(err =>{console.log(err)})
  },[id]
  )
    
  return (
    <div>
      {planet ? 
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
