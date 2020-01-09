import React from "react";

class Registartion extends React.Component   {



    state = {
        name:"",
        pass:"",
        repeatPass: ""
    } 

    hangleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    hangleChangePass = (e) => {
        this.setState({
            pass: e.target.value
        })
    }
    hangleChangeRepeatPass = (e) => {
        this.setState({
            repeatPass: e.target.value
        })
    }

    setDate = () => {
        const { name, pass, repeatPass } = this.state
        this.props.setRedistration(name, pass, repeatPass)
    }

    render () {
        const {name, pass, repeatPass} = this.state
    return (
        <div>
            <div>
                <input onChange={this.hangleChangeName} style={{ width: "200px" }} type="text" placeholder="name" valut={name}/>
            </div>
            <div>
                <input onChange={this.hangleChangePass} style={{ width: "200px" }} type="text" placeholder="password" valut={pass} />
            </div>
            <div>
                <input onChange={this.hangleChangeRepeatPass} style={{ width: "200px" }} type="text" placeholder="Repeat password" valut={repeatPass} />
            </div>
            <input onClick={()=>{this.props.goToFirstPage()}} type="button" style={{ width: "102px" }} value="Close" />
            <input onClick={this.setDate} type="button" style={{ width: "102px"}} value="GO"/>
        </div>
    );
};
}

export {Registartion}
