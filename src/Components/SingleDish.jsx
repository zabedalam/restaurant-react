import React from "react"
import {Media} from "reactstrap"



class SingleDish extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Media>
            <Media left href="#">
              <Media object src="assets/images/carbonara.jpg" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Carbonara
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
         );
    }
}
 
export default SingleDish;