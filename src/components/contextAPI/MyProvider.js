import React, {Component} from 'react';
import uniqid from 'uniqid';

// first we will make a new context
const MyContext = React.createContext({});

// Then create a provider Component
class MyProvider extends Component {
  state = {
    contacts: []
  };

  componentDidMount(){
    let myData = localStorage.getItem('contacts');
    console.log("myData", myData);
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
        addContact: (name, email, mobile) => {
          console.log(`${name} , ${email}, ${mobile}`);
          this.setState((prevState, props) => {
            contacts: prevState.contacts.push({id: uniqid(), name, email, mobile})
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
