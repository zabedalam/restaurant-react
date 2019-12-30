import  React from "react"
import { Container, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import Moment from "react-moment";

class ShowReservation extends React.Component {
    state = { 
        reservations: [],
        isLoading: true,
        errMessage: undefined
     }

    componentDidMount=async()=>{
        console.log("The Show Reservation Component is now loaded");
        let response=await fetch("https://strive-school-testing-apis.herokuapp.com/api/reservation")
        console.log(response);
        let getReservationsResult = await response.json();

      this.setState({
      isLoading: false,
      reservations: getReservationsResult
    });
    }
    render() { 
        return ( 
            <>
            {this.state.isLoading && (
          <Container className="d-flex justify-content-center my-5">
            <Spinner type="grow" color="primary" />
          </Container>
        )}
        {!this.state.isLoading && (
          <Container className="my-5">
            <ListGroup>
              {this.state.reservations.length > 0 &&
                this.state.reservations.map((reservation, index) => (
                  <ListGroupItem key={index}>
                    from: {reservation.name} for {reservation.numberOfPersons}{" "}
                    at{" "}
                    <Moment format="YYYY/MM/DD hh:MM">
                      {reservation.dateTime}
                    </Moment>
                    created at <Moment fromNow>{reservation.createdAt}</Moment>
                  </ListGroupItem>
                ))}
            </ListGroup>
            {this.state.reservations.length === 0 && (
              <h1> No reservations at your restaurant</h1>
            )}
          </Container>
        )}

            </>
         );
    }
}
 
export default ShowReservation;