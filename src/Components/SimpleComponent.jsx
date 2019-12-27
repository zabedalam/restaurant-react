import React from "react"
import {Container,Button} from "reactstrap"
class SimpleComponent extends React.Component {
    state = { 
        numberofClicks:0
     }

     incrementItem=()=>{
        this.setState({
            numberofClicks:this.state.numberofClicks + 1
        })
    }
    render() 
    { 
       
        return ( 
                  <Container>
    <h1>You clicked {this.state.numberofClicks} times</h1>
    <Button onClick={this.incrementItem}>+</Button>
                  </Container> 
         );
    }
}
 
export default SimpleComponent; 