import { Component } from "react";

interface Props {
    closeAddWindow: () => void,    
}
class CloseButton extends Component <Props>{
    render () {
        return (
            <button type="button" onClick={this.props.closeAddWindow}>Stäng</button>
        )
    }
}

export default CloseButton;