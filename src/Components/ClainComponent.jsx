import React from "react"
import {Jumbotron,Button} from "reactstrap"

class ClaimComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Jumbotron>
              <h1 className="display-3">Welcome to my Restaurant!</h1>
              <p className="lead">This is a virtual Restaurant!!!</p>
              <hr className="my-2" />
              <p>You can order food here,but you never get test!!!</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </div>
         );
    }
}
 
export default ClaimComponent;