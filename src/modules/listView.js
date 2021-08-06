import { Component } from "react";
import Menu from "./menu";
import List from "./list"

class ListView extends Component {
    render () {
        return (
            <section>
                <List />
                <Menu addItemScreen={this.props.addItemScreen}/>
            </section>
        )
    }
}

export default ListView;