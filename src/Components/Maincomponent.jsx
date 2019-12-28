import React from "react"
import {Container,Row} from "reactstrap"
import ClaimComponent from "./ClainComponent"
import SingleDish from "./SingleDish"
import Menu from "../data/menu.json"
import SimpleComponent from "./SimpleComponent"
import DishDetails from "./DishDetails"
import ReservationComponent from "./ReservationComponent"

class Maincomponent extends React.Component {
    state = { 
        selectedDish:undefined,
        searchString:""
     }
    selectDish=(dish)=>{
        // console.log(dish)
this.setState({
    selectedDish:dish
})
    }

    searchItem=(ev)=>{
// console.log(ev.target.value)
this.setState({
    searchString:ev.target.value.toLowerCase()
})
    }
    render() { 
        console.log(Menu)
        return ( 
            <Container>
                <Row>
                <ClaimComponent></ClaimComponent>
                <ReservationComponent></ReservationComponent>
                {/* <SingleDish></SingleDish> */}
                <input type="text" onChange={this.searchItem} value={this.state.searchString} />
                <SimpleComponent></SimpleComponent>
        {Menu.filter(dish=>dish.name.toLowerCase().indexOf(this.state.searchString)>=0 || dish.description.toLowerCase().indexOf(this.state.searchString)>=0).map((menuItem,index)=><SingleDish dish={menuItem} key={index} onSelectedDish={this.selectDish}/>)}   
        {/* <DishDetails dishName={Menu[0]}></DishDetails> */}
  {this.state.selectedDish && <DishDetails selectedDish={this.state.selectedDish}></DishDetails>}      

                </Row>  
            </Container>
               
            
         );
    }
}
 
export default Maincomponent;