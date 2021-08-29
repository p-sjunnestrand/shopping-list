import { Component } from "react";

class Empty extends Component {
    render () {
        return (
            <li onClick={this.props.handleClick}>Töm listan</li>
        )
    }
}

export default Empty;