import { Component } from "react";
// import Item from './item'

class List extends Component {

    state = {
        itemsLoaded : false,
        items : null,
    }
    render () {
        return (
            <section>
                <h2>list...</h2>
                {/* if items have been fetched from db, the items will populate the list, otherwise a loading indicator will be shown  
                {this.state.itemsLoaded ? this.state.items.map((item) => 
                (<li key={item.id} id={item.id}>{item.name}</li>)) : <h2>loading...</h2>}*/}
            </section>
        )
    }
}

export default List;