import { Component } from "react";

class AddItemField extends Component {
    render () {
        return (
            <div>
                <label htmlFor="itemField">Vara</label>
                <textarea id={"itemField"} value={this.props.value} onChange={this.props.onChange} required />
            </div>
        )
    }
}

export default AddItemField;