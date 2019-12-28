import React from "react"
import {Container,Row,Col,FormGroup,Form,Input,Button,Label} from "reactstrap"
class ReservationComponent extends React.Component {
    state = { 
        
            reservation: {
                name: "",
                phone: "",
                numberOfPersons: 1,
                smoking: false,
                dateTime: "",
                specialRequests: ""
              }
        
     }
     handleInput=(ev)=>{
         let input=ev.currentTarget
         let inputName=input.id
        let reservation=this.state.reservation  
        //  reservation[inputName]=input.value
        if(inputName==="smoking")
        {
            reservation[inputName]=input.checked

        }
        else{
            reservation[inputName]=input.value
        }
         this.setState({
             reservation:reservation 
     })
    }
    render() { 
        return ( 
            <Container>
                <Row>
                <FormGroup className="col-md-6">
        <Label for="name">Name</Label>
        <Input type="text"  id="name" placeholder="your name" 
        // value={this.state.value} 
        value={this.state.reservation.name} 
        // onChange={(val)=>{
        //  let reservation=this.state.reservation  
        //  reservation.name=val.currentTarget.value
        //  this.setState({
        //      reservation:reservation
        //  })
        // }
        // } 
        onChange={this.handleInput}
        />
      </FormGroup>
      <FormGroup className="col-md-6">
        <Label for="phone">Phone</Label>
        <Input type="text"  id="phone" placeholder="your phone" value={this.state.reservation.phone} 
        onChange={this.handleInput} />
      </FormGroup>
      <FormGroup className="col-md-6">
        <Label for="numberOfPersons">Person</Label>
        <Input type="select"  id="numberofPersons" placeholder="give number of persons" 
        value={this.state.reservation.numberOfPersons} onChange={this.handleInput} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            </Input>
      </FormGroup>
      <FormGroup className="col-md-6"
              check
              style={{ display: "flex", alignSelf: "center" }}>
        <Label check>
        <Input type="checkbox"  id="smoking" placeholder="your name"  value={this.state.reservation.smoking}
         onChange={this.handleInput}/>
        Smoking?</Label>
      </FormGroup>
      <FormGroup className="col-md-6">
              <Label for="dateTime">Date &amp; Time</Label>
              <Input
                type="datetime-local"
                id="dateTime"
                placeholder="Date &amp; Time"
                value={this.state.reservation.dateTime} onChange={this.handleInput}
              ></Input>
            </FormGroup>
            <FormGroup className="col-md-12">
              <Label for="specialRequests">Special Requests</Label>
              <Input
                type="textarea"
                id="specialRequests"
                
                value={this.state.reservation.specialRequests} onChange={this.handleInput}
              ></Input>
            </FormGroup>
                </Row>
                <Row>
                <FormGroup className="col-md-12">
                <Button >
                  Submit Reservation
                </Button>
              </FormGroup>
                </Row>
                
            </Container>
         );
    }
}
 
export default ReservationComponent;