import imgBeers from '../../assets/beers.png';
import imgRandomBeer from '../../assets/random-beer.png';
import imgNewBeer from '../../assets/new-beer.png';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function HomePage() {  

  return (
    
    <div className="HomePage">

    <Card style={{ width: '27rem' }}>
    <Link to='/Beers' className='text-decoration-none'>
      <Card.Img variant="top" src={imgBeers} />
      <Card.Body>
        <Card.Title className='text-start text-black'>All Beers</Card.Title>
        <Card.Text className='text-start text-secondary'>Anim mollit velit commodo do quis sit. 
      Aliqua esse sunt veniam non cillum labore quis 
      tempor do. Eu ut adipisicing consequat eu culpa 
      quis ullamco fugiat minim velit qui consectetur
      </Card.Text>
      </Card.Body>
      </Link>
    </Card>

    <Card style={{ width: '27rem' }}>
    <Link to='/RandomBeer' className='text-decoration-none'>
      <Card.Img variant="top" src={imgRandomBeer} />
      <Card.Body>
        <Card.Title className='text-start text-black'>Random Beers</Card.Title>
        <Card.Text className='text-start text-secondary'>Anim mollit velit commodo do quis sit. 
      Aliqua esse sunt veniam non cillum labore quis 
      tempor do. Eu ut adipisicing consequat eu culpa 
      quis ullamco fugiat minim velit qui consectetur
      </Card.Text>
      </Card.Body>
      </Link>
    </Card>    

    <Card style={{ width: '27rem' }}>
    <Link to='/NewBeer' className='text-decoration-none'>
      <Card.Img variant="top" src={imgNewBeer} />
      <Card.Body>
        <Card.Title className='text-start text-black'>New Beers</Card.Title>
        <Card.Text className='text-start text-secondary'>Anim mollit velit commodo do quis sit. 
      Aliqua esse sunt veniam non cillum labore quis 
      tempor do. Eu ut adipisicing consequat eu culpa 
      quis ullamco fugiat minim velit qui consectetur
      </Card.Text>
      </Card.Body>
      </Link>
    </Card>

    </div>
  );
}

export default HomePage;
