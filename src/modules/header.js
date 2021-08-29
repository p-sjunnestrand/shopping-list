import { Component } from "react";

class Header extends Component {

    state = {
        logoutBtn: false,
        settingsBtn: false,
    }

    //Animates the settings and logout buttons on mouse over by switching the logos.
    toggleIconState = (e) => {
        const buttonId = e.target.id;
        this.setState({[buttonId]: !this.state[buttonId]})
    }

    logout = () => {
        fetch("http://localhost:4000/logout", {
            method: "GET",
            credentials: "include",
        })
        .then(res => {
            if(res.ok) {
                this.props.setUserId("");
            } else {
                throw new Error ("Något gick fel!");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    render () {
        return (
            <header>
                <i className={`fas fa-cog narrowScreen ${this.props.user ? "" : "hidden"}`}/>
                <i id="settingsBtn" className={this.state.settingsBtn ? `fas fa-cog fa-rotate-90 wideScreen ${this.props.user ? "" : "hidden"}` : `fas fa-cog wideScreen ${this.props.user ? "" : "hidden"}`} onMouseOver={this.toggleIconState} onMouseOut={this.toggleIconState}/>
                <h1>Souken.</h1>
                <i className={`fas fa-door-open narrowScreen ${this.props.user ? "" : "hidden"}` } onClick={this.logout}/>
                <i id="logoutBtn" className={this.state.logoutBtn ? `fas fa-door-open wideScreen ${this.props.user ? "" : "hidden"}` : `fas fa-door-closed wideScreen ${this.props.user ? "" : "hidden"}`} onMouseOver={this.toggleIconState} onMouseOut={this.toggleIconState} onClick={this.logout}/>
            </header>
        )
    }
}

export default Header;