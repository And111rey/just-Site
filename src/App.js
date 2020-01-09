import React, { Component } from 'react';
import './App.css';
import { FirstPage } from "./components/FirstPage"
import { NextPage } from "./components/NextPage"
import { Registartion } from "./components/Registration"

class App extends Component {

  state = {
    logStatus: "",
    dataUsersForReg: []
  }

  setRedistration = (name, pass, rePass) => {
    if(pass === rePass) {
      let userData = {
        name: name,
        pass: pass
      }
      this.setState({
        dataUsersForReg: [...this.state.dataUsersForReg, userData],
        logStatus: "nextPage"
      }, () => {console.log(this.state.dataUsersForReg)})

    } else {
      alert("Ошибка при ввоеде повтороного пароля....")
    }
  }
  
  goToRegistartion = () => {
    this.setState({
      logStatus: "reg"
    })
  }
   goToFirstPage = () => {
    this.setState({
      logStatus: ""
    })
   }
   out = () => {
     this.setState({
       logStatus: "firstPage"
     })
   }


   checkUser = (name, pass) => {
      
      this.state.dataUsersForReg.map((e) => () => {
        console.log("sdfsdfsdfs", e)
        if(e.name === name && e.pass === pass) {
             this.setState({
              logStatus: "nextPage"
            })
        } else {
          alert("Неправельный пароль ")
        }
      })
   }

  page = () => {
   switch(this.state.logStatus){
    case "nextPage":
      return <NextPage out={this.out}/>
    case "reg":
      return < Registartion goToFirstPage={this.goToFirstPage} setRedistration={this.setRedistration} />
    case "firstPage":
      return < FirstPage  checkUser={this.checkUser} goToRegistartion={this.goToRegistartion} />
    default:
      return < FirstPage  checkUser={this.checkUser} goToRegistartion={this.goToRegistartion} />
    }
  }


  render() {
    return (
      <div className="App">
          <div>
            {this.page()}
          </div>
      </div>
    );
  }
}

export default App;