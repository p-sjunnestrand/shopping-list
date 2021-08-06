import { Component } from "react";

class MenuItemAddButton extends Component {
    render () {
        return (
            <li onClick={this.props.addItemScreen}>Lägg till varor</li>
        )
    }
}

export default MenuItemAddButton;