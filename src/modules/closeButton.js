import { Component } from "react";

class CloseButton extends Component {
    render () {
        return (
            <button type="button" onClick={this.props.closeAddWindow}>Stäng</button>
        )
    }
}

export default CloseButton;