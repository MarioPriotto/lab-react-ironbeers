import Card from 'react-bootstrap/Card';
import './Beers.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import HeadHP from '../../components/HeadHP';
import { Link } from 'react-router-dom';

function Beers() {

  const [beers, setBeers] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
          setBeers(response.data)
          setFetching(false)
      })
      .catch((error) => console.log(error))
  }, [])

  const renderBeers = beers.map((beer) => {
      return (
        <Link key={beer._id} to={`/BeersDetailsId/${beer._id}`} className='text-decoration-none'>
         {console.log(  `/BeersDetailsId/${beer._id}`   )}
          <Card style={{ width: '27rem', height: '12rem' }}>
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
        </Link>
      )
  })

  return (
    <div className="Beers">
         <HeadHP/>
         <div style={{ width: '27rem' }}>
            { fetching && <Spinner animation="border" /> }
         </div>
         { renderBeers.reverse() }
    </div>
  );
}

export default Beers;
