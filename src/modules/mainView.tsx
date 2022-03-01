import { Component } from "react";
import ListView from "./listView";
import AddItemView from "./addItemView";

interface State {
    addView: boolean,
}

class Main extends Component <{}, State>{

    state = {
        addView: false,
    }

    addItemScreen = () => {
        console.log("lägg till!");
        this.setState({addView: true})
    }

    closeAddWindow = () => {
        console.log("stäng!");
        this.setState({addView: false})
    }
    render () {
        return(
            <div>
                { this.state.addView ?
                <AddItemView closeAddWindow={this.closeAddWindow}/> :
                <ListView addItemScreen={this.addItemScreen}/> 
                }           
            </div>
        )
    }
}

export default Main;