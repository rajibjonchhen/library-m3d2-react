import { Container, Card } from "react-bootstrap"



const MyJumbotron = () => {
   return(
    <Container>

    <Card className="bg-dark text-white">
  <Card.Img src="https://images.unsplash.com/photo-1518373714866-3f1478910cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTEwMTR8MHwxfHNlYXJjaHw0fHxib29rJTIwc3RvcmV8ZW58MHx8fHwxNjMzMjU2ODYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=eduflow&utm_medium=referral" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h1>Wel Come</h1></Card.Title>
    <Card.Text>
     <h3>This is STRIVE BOOKS STORE</h3>
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</Container>
   )

}

export default MyJumbotron