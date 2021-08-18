import { Component } from "react";
import Item from './item'

class List extends Component {

    state = {
        itemsLoaded : false,
        items : null,
    }

    componentDidMount() {
        fetch('http://localhost:4000/list', {
        method: "GET",
        credentials: "include",
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            data.forEach((item) => {

                const itemId = item._id;
                this.setState({
                    [itemId]: false,
                })
            })
            this.setState({
                items: data,
                itemsLoaded: true,
            })
            
        })
    }

    handleClick = (e) => {
        console.log("click");
        const target = e.target;
        const parent = target.parentElement.id;
        console.log(parent);
        this.setState(prevState => ({
            [parent]: !prevState[parent]
        }))
    }

    render () {
        return (
            <section>
                <h2>list...</h2>
                {/* if items have been fetched from db, the items will populate the list, otherwise a loading indicator will be shown   */}
                {this.state.itemsLoaded ? this.state.items.map((item) => 
                (<Item key={item._id} id={item._id} item={item.name} section={item.section} className={this.state[item._id]?"checkedItem":"uncheckedItem"} handleClick={this.handleClick}/>)) : <h2>loading...</h2>}
            </section>
        )
    }
}

export default List;