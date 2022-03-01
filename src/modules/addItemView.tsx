import React from "react";
import AddItemField from "./addItemField";
import CloseButton from "./closeButton";
// import Field from "./field";
import Section from "./section";

interface Props {
    closeAddWindow:() => void,
}
interface State {
    itemField: string,
    sectionField: string
}
class AddItemView extends React.Component <Props, State>{

    state = {
        itemField: "",
        // This should not be hard coded since the options are dynamic and can change order. How do I fix this?
        sectionField: "",
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>|React.ChangeEvent<HTMLSelectElement>) => {
        //denna borde sättas i en modul och importeras här och i login
        const name: string = e.target.id;
        const value: string = e.target.value;

        console.log(value);
        console.log(name);

        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    addItem = (e: React.FormEvent) => {
        console.log("submit!");
        e.preventDefault();
        if (this.state.sectionField === "") {
            console.log("section required!");
        }
        else {

            const newItem: object = {
                item: this.state.itemField,
                section: this.state.sectionField,
            }
            fetch('http://localhost:4000/add', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItem)
            })
            // .then(res => {
            //     if (res.ok) {
            //         console.log(res);
            //     }
            // })
            .then(result => result.json())
            .then(data => {
                console.log(data)
                this.setState({
                    itemField: "",
                })
    
            })
        }
    }

    render () {
        return (
            <section>
                <h1>Lägg till ny vara</h1>
                {/*this.state.fields.map((field) => {
                    return (
                        <Field key={field} id={field} name={field} label={field} onChange={this.handleChange}/>
                        )
                    })*/}
                <form onSubmit={this.addItem}>
                    <AddItemField onChange={this.handleChange} value={this.state.itemField}/>
                    <Section onChange={this.handleChange}/>
                    {/* <Field id={"itemField"} label={"Vara"} onChange={this.handleChange} required={true} value={this.state.itemField}/> */}
                    {/* <Field id={"sectionField"} label={"Avdelning"} onChange={this.handleChange} value={this.state.sectionField}/> */}
                    <CloseButton closeAddWindow={this.props.closeAddWindow}/>
                    <button type="submit">Lägg till vara</button>
                </form>
            </section>
        )
    }
}

export default AddItemView;