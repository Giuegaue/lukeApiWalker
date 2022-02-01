import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    
    
    const [thing, setThing] = useState('people');
    const [theId, setTheId] = useState(0);
    const history = useHistory();
  

    const searchFunction = (e) => {
      e.preventDefault();
      history.push(`/${thing}/${theId}`);
    }


  return (
      <div>
        <p>
            Search for:
        </p>
          <form onSubmit={searchFunction}>
        <select value ={thing} onChange={(e)=>setThing(e.target.value)}>
              <option value='people'>People</option>
              <option value='planet'>Planet</option>
        </select>
        <p>
          ID: 
        </p>
        <input value ={theId} type='number' onChange={(e)=>setTheId(e.target.value)}/>
        <button> Search </button>
    </form>
    </div>
  );
};

export default Home;
