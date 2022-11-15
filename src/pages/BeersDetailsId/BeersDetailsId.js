import Card from 'react-bootstrap/Card';
// import './BeersDetailsId.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import HeadHP from '../../components/HeadHP';

import { useParams } from 'react-router-dom';

function BeersDetailsId() {

  const { id } = useParams();

  console.log(id);

  const [beer, setBeers] = useState([])
  const [fetching, setFetching] = useState(true)

  console.log(id);

  useEffect(() => {
    console.log(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
          setBeers(response.data)
          setFetching(false)
          console.log(beer)
      })
      .catch((error) => console.log(error))
  }, [])

  console.log(beer);

  const renderBeers = (
          <Card key={beer._id} style={{ width: '27rem', height: '12rem' }}>
            <div className='row'>
              <div className='col-3'>
                <Card.Img style={{ width: '4rem', height: '12rem', padding: '20px 12px 20px 12px' }} src={beer.image_url} />
              </div>
              <div className='col-9' style={{textAlign: 'left', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.5rem' }} className=''>{beer.name}</Card.Title>
                  <Card.Text style={{ fontSize: '1.0rem' }} className='text-secondary'>{beer.tagline}</Card.Text>
                  <Card.Text style={{ fontSize: '0.6rem' }} className='fw-bold'>{beer.contributed_by}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
      );

  return (
    <div className="BeersDetailsId">
         <HeadHP/>
         <div style={{ width: '27rem' }}>
            { fetching && <Spinner animation="border" /> }
         </div>
         { renderBeers }
    </div>
  );
}

export default BeersDetailsId;
