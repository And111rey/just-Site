import React from "react";

class FirstPage extends React.Component   {

    state = {
        name: "",
        pass: ""
    }
    onHendleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onHendleChangePass = (e) => {
        this.setState({pass: e.target.value}, ()=>{console.log(this.state.pass)})
    }

    getDataForChecking = () => {
        const {name, pass} = this.state
        console.log(name, pass)
        this.props.checkUser(name, pass)
        console.log("gooood")
    }

    render () { 
        const {name, pass} = this.state
    return (
        <div>
            first page
            <div>
                <input onChange={this.onHendleChangeName} style={{ width: "200px" }} type="text" value={name} />
            </div>
            <div>
                <input onChange={this.onHendleChangePass} style={{ width: "200px" }} type="text" value={pass}/>
            </div>
            <input   onClick={this.getDataForChecking} type="button" style={{ width: "102px" }} value="log IN" />
            <input onClick={()=>{this.props.goToRegistartion()}} type="button" style={{ width: "102px"}} value="Sign IN"/>
        </div>
    );
};
}

export {FirstPage}
