import { Container, Jumbotron, Button } from "react-bootstrap"



const MyJumbotron = () => {
   return(
    <Container className="container-fluid">

<Jumbotron>
  <h1>Hello</h1>
  <p>
    Welcome to the Strive Library
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  <img src="" alt=""/>
</Jumbotron>
</Container>
   )

}

export default MyJumbotron