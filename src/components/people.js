import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const People = (props) => {
  const[people, setPeople] = useState();
  const {id} = useParams();
  const [error, setError] = useState(false);


  useEffect(() => {
  axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res =>{setPeople(res.data);
      console.log(res.data)
      setError(false);
      })
    .catch(err =>{console.log(err)}, setError(true))
  },[id]
  )


  return (
    <div>
      {error ? <h1>These are not the droids you are looking for</h1>
      : people ?
      <div>
        <h1>Name: {people.name}</h1>
        <div>Height: {people.height}</div>
        <div>Mass: {people.mass}</div>
        <div>Hair Color:{people.hair_color}</div>
        <div>Skin Color: {people.skin_color}</div>
      </div>
      : <p>loading</p>
}
    </div>
  )
};

export default People;
