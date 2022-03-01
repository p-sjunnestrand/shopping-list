import React from "react";
import Menu from "./menu";
import List from "./list"

interface Props {
    addItemScreen: () => void,
}
interface State {
    itemsLoaded: boolean,
    items: object[],
}
interface Item {
    _id: string,
    name: string,
    section: string,
    checked: boolean,
}

class ListView extends React.Component <Props, State>{

    state = {
        itemsLoaded : false,
        items : [],
    }

    dataLoaded = (data: Item[]) => {
        //Adds a checked key to all object fetched from db. Used under clearClick.
        const addedCheck: object = {checked: false};
        data.map(obj => {
            console.log(typeof(obj._id));
            
            return {...obj, ...addedCheck}
        })
        console.log("listView 32 ", data);
        
        
        
        //Sets items in data as state. Also changes state to signal that all items are fetched from db, which triggers a render of list items in list.js.
        this.setState({
            items: data as Item[],
            itemsLoaded: true,
        })
    }
    //Handles click on done-button for each list item. (rename!)
    checkClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parent: string = e.target.parentElement!.id;
        
        //Toggles between checked: false/true for each click.
        let updatedItems: object[] = this.state.items.map((item: Item) => {
            
            if(item._id === parent) {
                return {...item, checked: !item.checked}
            }
            return item;
        })
        this.setState({...this.state, items: updatedItems})        
    }

    //Removes the checked items from the list through a fetch to server
    clearClick = () => {
        //Filters out only checked items.
        const checkedItems: Array<object> = this.state.items.filter((obj: Item) => {
            return obj.checked;
        })

        //Prevents fetch if state is empty.
        if(!checkedItems.length){
            return;
        } else {
            //Grabs _id of checked items.
            console.log("71", checkedItems);
            console.log("72", this.state.items);
            
            
            const itemIds: string[] = checkedItems.map((obj: any): string =>  obj._id); //Vad ska jag ha för typ här!?
            
            //Filters out unchecked items to update state with.
            const newState: object[] = this.state.items.filter((obj: Item) => !obj.checked);
    
            this.fetchDelete(itemIds, newState);
        }
    }
    //Empties the list of items.
    emptyList = () => {
        const itemIds: string[] = this.state.items.map((obj: Item): string => obj._id);
        //Prevents fetch if state is empty.
        if (itemIds.length === 0) {
            return;
        } else {
                const newState: object[] = [];
    
                this.fetchDelete(itemIds, newState);
        }
    }

    //This should probably be put in a module.
    fetchDelete = (itemIds: string[], newState: object[]) => {
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
                <List state={this.state} dataLoaded={this.dataLoaded} handleClick={this.checkClick}/>
                <Menu addItemScreen={this.props.addItemScreen} listPopulated={this.state.items.length ? true : false} clearClick={this.clearClick} emptyList={this.emptyList}/>
            </section>
        )
    }
}

export default ListView;
