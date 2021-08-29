import { Component } from "react";
import Menu from "./menu";
import List from "./list"

class ListView extends Component {

    state = {
        itemsLoaded : false,
        items : [],
    }

    dataLoaded = (data) => {
        //Adds a checked key to all object fetched from db. Used under clearClick.
        data.map(obj => {
            return obj.checked = false;
        })
        // console.log(data);
        
        //Sets items in data as state. Also changes state to signal that all items are fetched from db, which triggers a render of list items in list.js.
        this.setState({
            items: data,
            itemsLoaded: true,
            })
    }
    //Handles click on done-button for each list item. (rename!)
    handleClick = (e) => {
        // console.log("click");
        const target = e.target;
        const parent = target.parentElement.id;
        // console.log(parent);

        //Toggles between checked: false/true for each click.
        let updatedItems = this.state.items.map(item => {
            if(item._id === parent) {
                return {...item, checked: !item.checked}
            }
            return item;
        })
        this.setState({...this.state, items: updatedItems})
        // console.log(updatedItems);
        
    }

    //Removes the checked items from the list through a fetch to server
    clearClick = () => {
        // console.log("clear!");
        //Filters out only checked items.
        const checkedItems = this.state.items.filter(obj => {
            return obj.checked;
        })
        //Prevents fetch if state is empty.
        if(checkedItems.length === 0){
            return;
        } else {
            //Grabs _id of checked items.
            const itemIds = checkedItems.map(obj => obj._id);
            // console.log(itemIds);
    
            //Filters out unchecked items to update state with.
            const newState = this.state.items.filter(obj => !obj.checked);
            // console.log("newState", newState);
    
            this.fetchDelete(itemIds, newState);
        }
    }
    //Empties the list of items.
    emptyList = () => {
        const itemIds = this.state.items.map(obj => obj._id);
        //Prevents fetch if state is empty.
        if (itemIds.length === 0) {
            return;
        } else {
                const newState = [];
    
                this.fetchDelete(itemIds, newState);
            
            // console.log(itemIds);
        }
    }

    //This should probably be put in a module.
    fetchDelete = (itemIds, newState) => {
        fetch("http://localhost:4000/delete", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemIds)
        })
        .then(response => {
            if(!response.ok){
                console.log(response);
            } else {
                this.setState({...this.state, items: newState})
            }
        })
    }
    render () {
        return (
            <section id="listView">
                <List state={this.state} dataLoaded={this.dataLoaded} handleClick={this.handleClick}/>
                <Menu addItemScreen={this.props.addItemScreen} listPopulated={this.state.items.length ? true : false} clearClick={this.clearClick} emptyList={this.emptyList}/>
            </section>
        )
    }
}

export default ListView;
