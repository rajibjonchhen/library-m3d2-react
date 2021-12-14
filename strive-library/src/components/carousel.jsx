import { Component } from 'react'
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap'
import books from '../components/data/fantasy.json'
const Carousel = () => { 
  return (
    <Container>
    <Carousel>
      books.map(book => {
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={books.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{books.title}</h3>
          <p>Category : {books.category}</p>
          <p>Price : {books.price}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      })
  
</Carousel>
  </Container>
  )
}
