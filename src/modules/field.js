import { Component } from "react";

class Field extends Component {

    render () {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} name={this.props.id} onChange={this.props.onChange} required={this.props.required} value={this.props.value}/>
            </div>
        )
    }
}

export default Field;