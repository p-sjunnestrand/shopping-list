import { Component } from "react";

class Item extends Component {
    render () {
        return (
            <li id={this.props.id} className={this.props.className}>
                <div>
                    <h3>Vara: {this.props.item}</h3>
                    <p>Avdelning: {this.props.section}</p>
                </div>
                <input type="checkbox" className="itemCheck" onClick={this.props.handleClick}/>
            </li>
        )
    }
}

export default Item;