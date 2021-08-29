import { Component } from "react";

class Clear extends Component {
    render() {
        return(
            <li onClick={this.props.handleClick}>Rensa listan</li>
        )
    }
    
}

export default Clear;