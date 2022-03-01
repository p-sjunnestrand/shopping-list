import { Component } from "react";

interface Props {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

class AddItemField extends Component <Props>{
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