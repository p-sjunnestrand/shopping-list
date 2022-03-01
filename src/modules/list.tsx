import { Component } from "react";
import Item from './item';

interface IItem {
    _id: string,
    name: string,
    section: string,
    checked: boolean,
}
interface IState {
    items: IItem[],
    itemsLoaded: boolean,
}
interface Props {
    dataLoaded: (data: IItem[]) => void,
    state: IState,
    handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

class List extends Component <Props>{

    //Fetches list items from the server.
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
                <ul className={this.props.state.items.length ? undefined : "emptyList"}>
                    {/* if items have been fetched from db, the items will populate the list, otherwise a loading indicator will be shown   */}
                    {this.props.state.itemsLoaded ? this.props.state.items.map((item) => 
                        (<Item key={item._id} id={item._id} item={item.name} section={item.section} className={item.checked?"checkedItem":"uncheckedItem"} handleClick={this.props.handleClick}/>)) : <h2>loading...</h2>}
                </ul>
            </section>
        )
    }
}

export default List;