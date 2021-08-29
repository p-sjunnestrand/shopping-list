import { Component } from "react";
import Item from './item'

class List extends Component {

    // state = {
    //     itemsLoaded : false,
    //     items : null,
    // }

    componentDidMount() {
        fetch('http://localhost:4000/list', {
        method: "GET",
        credentials: "include",
        })
        .then(result => result.json())
        .then(data => {
            this.props.dataLoaded(data);
        })
    }

    render () {
        return (
            <section id="list">
                <ul className={this.props.state.items.length ? null : "emptyList"}>
                    {/* if items have been fetched from db, the items will populate the list, otherwise a loading indicator will be shown   */}
                    {this.props.state.itemsLoaded ? this.props.state.items.map((item) => 
                    (<Item key={item._id} id={item._id} item={item.name} section={item.section} className={item.checked?"checkedItem":"uncheckedItem"} handleClick={this.props.handleClick}/>)) : <h2>loading...</h2>}
                </ul>
            </section>
        )
    }
}

export default List;

// item.checked
// this.props.state[item._id]?"checkedItem":"uncheckedItem"