import React from "react"
import {Container,Row} from "reactstrap"
import ClaimComponent from "./ClainComponent"
import SingleDish from "./SingleDish"
import Menu from "../data/menu.json"

class Maincomponent extends React.Component {
    state = {  }
    render() { 
        console.log(Menu)
        return ( 
            <Container>
                <Row>
                <ClaimComponent></ClaimComponent>
                <SingleDish></SingleDish>
                </Row>  
            </Container>
               
            
         );
    }
}
 
export default Maincomponent;