import React ,{Component} from 'react';
import Footer from '../component/Footer';


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
            <div className="App">
            <div className="App-content1"></div>
            <div className="App-content2">
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
            <Footer footerBold="Powered by" footerSupport="html5, CSS3, reactjs"/>
            </div>
            <div className="App-content3"></div>
            </div>
            
        );

    }
}

export default FormLogin;