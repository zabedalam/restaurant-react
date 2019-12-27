import React from "react"
import {Media} from "reactstrap"



class SingleDish extends React.Component {
    state = {  }
    elementSelect=()=>{
      this.props.onSelectedDish(this.props.dish)
// console.log(this.props)
    }
    render() { 
        console.log(this.props)
        return ( 
            <Media onClick={this.elementSelect}>
            <Media left href="#">
              <Media object src={this.props.dish.image} alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                {this.props.dish.name}
              </Media>
              {this.props.dish.description}
            </Media>
          </Media>
         );
    }
}
 
export default SingleDish;