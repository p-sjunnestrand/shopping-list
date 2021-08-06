import { Component } from "react";
import CloseButton from "./closeButton";
import Field from "./field";

class AddItemView extends Component {

    state = {
        fields: ["Vara", "Avdelning"],
         
    }

    handleChange = (e) => {
        //denna borde sättas i en modul och importeras här och i login
        const target = e.target;
        const name = target.name;
        const value = target.value;

        console.log(value);

        this.setState({
        [name]: value,
        });
    }
    render () {
        return (
            <section>
                <h1>Lägg till ny vara</h1>
                {this.state.fields.map((field) => {
                    return (
                        <Field key={field} id={field} name={field} label={field} onChange={this.handleChange}/>
                        )
                    })}
                <CloseButton closeAddWindow={this.props.closeAddWindow}/>
            </section>
        )
    }
}

export default AddItemView;