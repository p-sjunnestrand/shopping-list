import { Component } from "react";

class Section extends Component {
    render () {
        return (
            <select onChange={this.props.onChange} id="sectionField">
                <option>Välj avdelning...</option>
                <option>Frukt och grönt</option>
                <option>Mejeri</option>
                <option>Bröd</option>
                <option>Frysvaror</option>
                <option>Kött och chark</option>
                <option>Torrvaror</option>
                <option>Övrigt</option>
                <option>Lägg till avdelning...</option>
            </select>
        )
    }
}

export default Section;