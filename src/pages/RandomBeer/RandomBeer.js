import './RandomBeers.css';

import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import HeadHP from '../../components/HeadHP';

function RandomBeer() {

  const [objState, setObjState] = useState({ id: "", fetching: true})

  useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
          let randomTemp = Math.floor(Math.random() * (response.data.length) );
          setObjState ({ id: response.data[randomTemp]._id.toString(), fetching: false});
      })
      .catch((error) => console.log(error))
  }, [])

  const checkJump = (id) =>  {
    if ( id.length === 0 ) {
      return ( <>
        <HeadHP/>
        <div style={{ width: '27rem' }}>
            <Spinner animation="border" />
         </div>
      </> )
    } else {
      return ( <Navigate to={`/BeersDetailsId/${id}`} replace={true}/> )
    }
  }

  return (
    <div className="RandomBeer">
      { objState && checkJump(objState.id) }
    </div>
  );
}

export default RandomBeer;

