import React from "react";

interface Props {
    id: string,
    label: string,
    type: string,
    required: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
class Field extends React.Component<Props> {

    render () {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} name={this.props.id} type={this.props.type} required={this.props.required} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default Field;