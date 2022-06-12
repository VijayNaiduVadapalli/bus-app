import React from 'react';
import { Link } from 'react-router-dom';
export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {   //initialzing empty state
      username: '',
      password: '',
      isLogined: false
    }
  }


  handleInputChange = (event) => {  //handling input change
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitClick = () => {   
    if ((this.state.username == "vijay") && (this.state.password == "vijay123")) {
      this.setState({ isLogined: true });  //set change 
    }
  }
  render() {
    return (
      <div className='search-container' style={{ height: '400px' }}>
        <h2 className='mt-3 mb-3'> Login</h2>

        <div class="form-group mb-3">
          <label>
            Username:
            <input data-testid="userName-input"required type="text" name="username" class="form-control mt-2" onChange={e => this.handleInputChange(e)} />
          </label>
        </div>

        <div class="form-group mb-3">
          <label>
            Password:
            <input data-testid="password-input" required type="password" name="password" class="form-control mt-2" onChange={e => this.handleInputChange(e)} />
          </label>
        </div>

        <Link to ='/availability'><button type="button" onClick={this.submitClick} class="btn btn-primary" >Login</button></Link>
        

      </div>
    );
  }
}