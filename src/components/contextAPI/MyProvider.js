import React, {Component} from 'react';

// first we will make a new context
const MyContext = React.createContext({});

// Then create a provider Component
class MyProvider extends Component {
  state = {
    contacts: [{
      id: '12454657657',
      name: "Akash Kumar Seth",
      email: "vksrandom@gmail.com",
      mobile: 4564990540
    }]
  };

  componentDidMount(){
    let myData = localStorage.getItem('contacts');
    if(myData){
      this.setState({
        contacts : JSON.parse(myData)
      })
    }
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        addContacts: (name, email, mobile) => {
          this.setState((prevState, props) => {
            contacts: prevState.push({name, email, mobile})
          },
            () => {localStorage.setItem('contacts', JSON.stringify(this.state.contacts));}
            )
        },
        updateContacts: () => {

        },
        deleteContacts: () => {

        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {
  MyProvider,
  MyContext
};
