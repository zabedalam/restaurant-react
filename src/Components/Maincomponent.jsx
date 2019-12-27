import React from "react"
import {Container,Row} from "reactstrap"
import ClaimComponent from "./ClainComponent"
import SingleDish from "./SingleDish"
import Menu from "../data/menu.json"
import SimpleComponent from "./SimpleComponent"
import DishDetails from "./DishDetails"

class Maincomponent extends React.Component {
    state = { 
        selectedDish:undefined
     }
    selectDish=(dish)=>{
        // console.log(dish)
this.setState({
    selectedDish:dish
})
    }
    render() { 
        console.log(Menu)
        return ( 
            <Container>
                <Row>
                <ClaimComponent></ClaimComponent>
                {/* <SingleDish></SingleDish> */}
                <SimpleComponent></SimpleComponent>
        {Menu.map((menuItem,index)=><SingleDish dish={menuItem} key={index} onSelectedDish={this.selectDish}/>)}   
        {/* <DishDetails dishName={Menu[0]}></DishDetails> */}
  {this.state.selectedDish && <DishDetails selectedDish={this.state.selectedDish}></DishDetails>}      

                </Row>  
            </Container>
               
            
         );
    }
}
 
export default Maincomponent;