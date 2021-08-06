import { Component } from "react";
import MenuItemAddButton from "./menuAddItem";

class Menu extends Component {
    render () {
        return (
            <ul>
                <MenuItemAddButton addItemScreen={this.props.addItemScreen}/>
                <li>Inställningar</li>
                <li>Rensa lista</li>
                <li>Töm lista</li>
            </ul>
        )
    }
}

export default Menu;