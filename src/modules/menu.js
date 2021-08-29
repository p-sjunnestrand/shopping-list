import { Component } from "react";
import MenuItemAddButton from "./menuAddItem";
import Clear from "./clear";
import Empty from "./empty";

class Menu extends Component {

    render () {
        return (
            <ul>
                <MenuItemAddButton addItemScreen={this.props.addItemScreen}/>
                {this.props.listPopulated ? <Clear handleClick={this.props.clearClick}/> : null}
                {this.props.listPopulated ? <Empty handleClick={this.props.emptyList}/> : null}

            </ul>
        )
    }
}

export default Menu;