import { Component } from "react";

class Item extends Component {
    render () {
        return (
            <li id={this.props.id} className={this.props.className}><p>Vara: {this.props.item}</p><p>Avdelning: {this.props.section}</p><button onClick={this.props.handleClick}>X</button></li>
        )
    }
}

export default Item;