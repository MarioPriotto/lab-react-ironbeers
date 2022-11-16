import "./NewBeer.css";

import { useState } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

import HeadHP from '../../components/HeadHP';

function NewBeer() {

    const navigate = useNavigate();

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";

    const [form, SetForm] = useState({
      name: "", tagline: "", description: "", 
      first_brewed: "", brewers_tips: "", attenuation_level: 0, 
      contributed_by: ""
    });

    const handleChange = (event) => {
      SetForm({...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post(apiURL, form)
        navigate("/NewBeer")
      } catch (error) {
      }      
      
      SetForm({
        name: "", tagline: "", description: "", 
        first_brewed: "", brewers_tips: "", attenuation_level: 0, 
        contributed_by: ""
      });

    }

    return (
      <div className="NewBeer" style={{ width: '27rem' }}>

        <HeadHP target="/"/>

        <div className="text-center" style={{ width: '22rem', margin: "0 auto" }}>

          <Form onSubmit={ handleSubmit } className='text-start py-3'>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Nome</Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="name" autoFocus onChange={ handleChange } value = { form.name } />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Apelido: </Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="tagline" onChange={ handleChange } value = { form.tagline } />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Descrição: </Form.Label>
              <Form.Control as="textarea" rows="5"
                style={{ borderRadius: "20px" }}
                name="description" 
                onChange={ handleChange } 
                value = { form.description }                 
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Primeira Fabricação: </Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="first_brewed" onChange={ handleChange } value = { form.first_brewed } />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Sugestões: </Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="brewers_tips" onChange={ handleChange } value = { form.brewers_tips } />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Teor alcoólico: </Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="attenuation_level" onChange={ handleChange } value = { form.attenuation_level } />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mx-3 text-start fw-bold lh-1" style={{ fontSize: "0.8rem" }}>Contribuição de: </Form.Label>
              <Form.Control type="text" style={{ borderRadius: "20px" }}
                name="contributed_by" onChange={ handleChange } value = { form.contributed_by } />
            </Form.Group>

            <div className='text-center'>
            <Button style={{ width: '18rem', backgroundColor: 'rgba(61,196,252,255)', border: "0px", borderRadius: "20px" }} 
              className="text-center mt-3" variant="primary" type="submit">
                Cadastrar
            </Button>
            </div>            

          </Form>

        </div>
  
      </div>
    );
  }
  
  export default NewBeer;
  