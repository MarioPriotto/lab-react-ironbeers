import Card from 'react-bootstrap/Card';
import './BeersDetailsId.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import HeadHP from '../../components/HeadHP';

import { useParams } from 'react-router-dom';

function BeersDetailsId() {

  const { id } = useParams();

  const [beer, setBeers] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
          setBeers(response.data)
          setFetching(false)
      })
      .catch((error) => console.log(error))
  }, [])

  const renderBeers = (

    <Card key={beer._id} style={{ width: '27rem' }}>

      <Card.Img style={{ width: '5.3rem', height: '18rem', margin: "0 auto", padding: '20px 12px 20px 12px' }} src={beer.image_url} />

      <div className="px-5 d-flex justify-content-between">
        <p className="text-start fs-1">{beer.name}</p>
        <p className="text-opacity-50 fw-bold fs-1 text-secondary">{beer.attenuation_level}</p>
      </div>
      <div className="px-5 d-flex justify-content-between">
        <p className="text-start text-opacity-50 fw-bold text-secondary">{beer.tagline}</p>
        <p className="text-end fw-bold">{beer.first_brewed}</p>
      </div>

      { /* não existe CLASSE para justificar no BOOTSTRAP */}

      { /* style={{ textAlign: 'justify' }} */}
      { /* style={{ fontSize: '1.5rem' }} */}
      { /* style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }} */}

      {/* Altura da Linha: lh-1 lh-sm lh-base lh-lg */}

      <p className="px-5 fw-bold text-start lh-1" >{beer.description}</p>
      <p className="text-opacity-50 px-5 fw-bold text-start fs-6 text-secondary">{beer.contributed_by}</p>

    </Card>

  );

  return (
    <div className="BeersDetailsId">
         <HeadHP target="/Beers" />
         <div style={{ width: '27rem' }}>
            { fetching && <Spinner animation="border" /> }
         </div>
         { renderBeers }
    </div>
  );
}

export default BeersDetailsId;
