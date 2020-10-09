import React ,{Component} from 'react';

class FormLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }

        this.handleFormLogin = this.handleFormLogin.bind(this);
    }

    handleFormLogin(){

    }

    render(){
        return(
            <form className="App-form">
            <h2>Login</h2>

            <input type='email'
               name= 'email'
               value={this.state.username} 
               placeholder = 'Email'
               onChange = {this.handleInput}
               required
           />

           <input type='password'
               name= 'password'
               value={this.state.password} 
               placeholder = 'Password'
               onChange = {this.handleInput}
               required
            />
           
           <input type="submit" value="Login"/>
        </form>
        );

    }
}

export default FormLogin;