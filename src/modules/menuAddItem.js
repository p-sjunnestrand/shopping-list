import { Component } from "react";

class MenuItemAddButton extends Component {
    render () {
        return (
            <li onClick={this.props.addItemScreen} className="menuBtn"><p>Lägg till varor</p></li>
        )
    }
}

export default MenuItemAddButton;