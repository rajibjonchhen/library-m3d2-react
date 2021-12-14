import { render } from '@testing-library/react';
import { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import books from '../components/data/fantasy.json'

class MyCarousel extends Component { 
  state = {
    selectedBook : null
  }
  render(){
    return (
          <Container>
            <Row>
                <Col xs={12} md={8} lg={6}>
                      <Carousel>{ 
                          books.map(book => ( 
                            <Carousel.Item key = {book.asin}>
                                <img
                                  className="d-block w-100"
                                  src={book.img}
                                  alt= 'cover of a book'  
                                />
                                <Carousel.Caption>
                                    <h3>{book.title}</h3>
                                    <p>Category : {book.category}</p>
                                    <p>Price : {book.price}</p>
                                </Carousel.Caption>
                          </Carousel.Item>
                          
                          ))
                    
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
  }
  
}

export default MyCarousel
