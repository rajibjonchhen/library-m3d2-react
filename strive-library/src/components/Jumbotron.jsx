import { Container, Jumbotron, Button } from "react-bootstrap"

let sectionStyle = {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1518373714866-3f1478910cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTEwMTR8MHwxfHNlYXJjaHw0fHxib29rJTIwc3RvcmV8ZW58MHx8fHwxNjMzMjU2ODYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=eduflow&utm_medium=referral"})`
    
}
const MyJumbotron = () => {
   return(
    
<Jumbotron style={sectionStyle} className="w-100">
  <h1>Hello</h1>
  <p>
    Welcome to the Strive Book Store
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  <img src="" alt=""/>
</Jumbotron>

   )

}

export default MyJumbotron