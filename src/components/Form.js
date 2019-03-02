import React from 'react';
import {MyContext, MyProvider} from './contextAPI/MyProvider';

class Form extends React.Component{

  state = {
    name : '',
    email: '',
    mobile: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (event, context) =>{
    event.preventDefault();
    console.log("Event",event);
    console.log("Context",context);
    context.addContact(this.state.name, this.state.email, this.state.mobile);
    this.props.history.push('/');
  };

  render(){
    return(
      <div className="form">
        <div className="page-title">
          <span>Add</span> Contact
        </div>
        <MyContext.Consumer>
          {(context) => (
            <form onSubmit={(event) => this.handleSubmit(event,context)}>
              <label htmlFor="name"><b>Name</b></label>
              <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange('name')} pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." required/>
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange('email')} pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" title="Require a valid Email." required/>
              <label htmlFor="mobile"><b>Mobile</b></label>
              <input type="text" name="mobile" placeholder="Enter Mobile Number" value={this.state.mobile} onChange={this.handleChange('mobile')} pattern="[0-9]{10}" title="Mobile Number Must be 10 digit Number." required/>
              <input type="submit" value="Submit"/>
            </form>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
};

export default Form;