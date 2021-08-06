import { Component } from "react";

class Field extends Component {

    render () {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} name={this.props.id} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default Field;