import React from "react"
import {Container,Row,Col} from "reactstrap"

class DishDetails extends React.Component {
    state = {  }
    
    render() { 
        let dish=this.props.dishName
        return ( 
            <Container className="mt-5">
                <Row>
                    <Col md="4">
                    <img src={dish.image} alt="dish image"></img>
                    </Col>
<Col md="8">
        <h2>{dish.name}</h2>
        <h2>{dish.description}</h2>
        <h2>Label :{dish.label}</h2>
        <h2>Price :{dish.price}</h2>

</Col>

</Row>
            </Container>
         );
    }
}
 
export default DishDetails;