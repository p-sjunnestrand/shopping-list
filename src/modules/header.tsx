import React from "react";

interface State {
    logoutBtn: boolean,
    settingsBtn: boolean,
}
//Prob make string null instead.
interface Props {
    user: number|string,
    setUserId: (id: number|string) => void,
}
class Header extends React.Component <Props, State> {

    state = {
        logoutBtn: false,
        settingsBtn: false,
    }

    //Animates the settings and logout buttons on mouse over by switching the logos.
    toggleIconState = (e: React.MouseEvent<HTMLSpanElement>): void => {
        const buttonId: string = (e.target as HTMLElement).id
        
        this.setState((prevState) => ({
            ...prevState,
            [buttonId]: !this.state[buttonId as keyof typeof this.state]}))
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
                <span className={`fas fa-cog narrowScreen ${this.props.user ? "" : "hidden"}`}/>
                <span id="settingsBtn" className={this.state.settingsBtn ? `fas fa-cog fa-rotate-90 wideScreen ${this.props.user ? "" : "hidden"}` : `fas fa-cog wideScreen ${this.props.user ? "" : "hidden"}`} onMouseOver={this.toggleIconState} onMouseOut={this.toggleIconState}/>
                <h1>Souken.</h1>
                <span className={`fas fa-door-open narrowScreen ${this.props.user ? "" : "hidden"}` } onClick={this.logout}/>
                <span id="logoutBtn" className={this.state.logoutBtn ? `fas fa-door-open wideScreen ${this.props.user ? "" : "hidden"}` : `fas fa-door-closed wideScreen ${this.props.user ? "" : "hidden"}`} onMouseOver={this.toggleIconState} onMouseOut={this.toggleIconState} onClick={this.logout}/>
            </header>
        )
    }
}

export default Header;