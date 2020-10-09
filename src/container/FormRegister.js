import React, {Component} from 'react';  
import axios from 'axios';

class FormRegister extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          newUser: {
            firstName: '',
            lastName: '',
            gender: '',
            phoneNumber: '',
            birthDate: '',
            email :''
          },
          monthOpt :'',
          dateOpt :'',
          yearOpt:'',
          blur:false,
          resultSave:false,
          disableBtnReg:'',
          successSubmit:true,
          genderOptions: ['Male', 'Female'],    
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOptionRadio = this.handleOptionRadio.bind(this);
        this.handlePhoneValidate = this.handlePhoneValidate.bind(this);
        
      }

       handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ newUser : 
             {...prevState.newUser, [name]: value
             }
           }), () => console.log(this.state.newUser))
       }

        handleOptionRadio(es) {
            let rv = es.target.value;
            this.setState({ gender : rv });
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, gender: rv
                }
              }), () => console.log(this.state.newUser))
        }
       
        formateDate()
        {
            let d = new Date(this.state.yearOpt, this.state.monthOpt, this.state.dateOpt),
                mon = '' + (d.getMonth() + 1),
                dy = '' + d.getDate(),
                yr = d.getFullYear();

            if (mon.length < 2) 
                mon = '0' + mon;
            if (dy.length < 2) 
                dy = '0' + dy;

            let newDate =  [yr, mon, dy].join('-');

            this.setState({ birthDate : newDate });
            this.setState( prevState => ({ newUser : 
                {...prevState.newUser, birthDate: newDate
                }
                }), () => console.log(this.state.newUser));
        }

       handleDate = (name, e2) => {
            this.setState({ [name]: e2.target.value });
            this.formateDate();
        }
     
        getOptions(start, end) {
            const options = [];
        
            for(let i = start; i <= end; i++) {
                options.push(<option key={i}>{i}</option>)
            }
        
            return options;
        }
        handlePhoneValidate(pn){
            let isValid =true;

            if (typeof pn !== "undefined") {
                var pattern = new RegExp(/^[0-9\b]+$/);
                if (!pattern.test(pn)) {
                    isValid = false;
                }else if(pn.length !== 10){
                    isValid = false;
                }
            }

            return isValid;
        }

        handleBtnLogin(){
            if(this.state.successSubmit){
                return(
                    <div className="App-btn-login">
                        <button>Login</button>
                    </div>
                );
            }
            return(<div></div>);
            
        }
       handleFormSubmit(e) {
         e.preventDefault();
         let userData = this.state.newUser;
         let isValid = this.handlePhoneValidate(this.state.newUser.phoneNumber);
         
         this.setState({ blur:true });
         this.setState({ disableBtnReg:'disabled' });
        
        if(isValid){
            fetch('http://localhost:8080/user/',{
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                response.json().then(res =>{
                    this.setState({ successSubmit:true });
                console.log("Successful" + res.data);
                })
            })
        }else{
            alert("please enter indonesia phone number");
        }
         
       }   

       componentDidMount() {
        axios.get(`http://localhost:8080/user/`)
          .then(res => {
              console.log(res.data);
            // const persons = res.data;
            // this.setState({ persons });
          })
      }
       
       handleClearForm(e) {
       
           e.preventDefault();
           this.setState({ 
             newUser: {
                firstName: '',
                lastName: '',
                gender: '',
                phoneNumber: '',
                birthDate: '',
                email :''
             },

           })
       }
     
       render() {

        const month = {1: 'January', 2: 'February', 3:'March', 4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};        
        const monthOption = Object.keys(month).map(key => 
            <option key={key} value={key}>{month[key]}</option>
        )
        const thisYear = new Date().getFullYear();

         return (
             <div>
             <div className={this.state.blur?'App-grey':''}>
             <form onSubmit={this.handleFormSubmit} className="App-form">
                 <h2>Registration</h2>

                <input type='tel'
                    name= 'phoneNumber'
                    value={this.state.newUser.phoneNumber} 
                    placeholder = 'Mobile Number'
                    onChange = {this.handleInput}
                    required 
                 />

                <input type='text'
                    name= 'firstName'
                    value={this.state.newUser.firstName} 
                    placeholder = 'First Name'
                    onChange = {this.handleInput}
                    required
                 />

                <input type='text'
                    name= 'lastName'
                    value={this.state.newUser.lastName} 
                    placeholder = 'Last Name'
                    onChange = {this.handleInput}
                    required
                />
                <label>Date of Birth</label> <br />
                <select value={this.state.monthOpt} onChange={(e) => this.handleDate("monthOpt", e)}>
                    <option value="">Month</option>
                    {monthOption}
                </select>
                <select value={this.state.dateOpt} onChange={(e) => this.handleDate("dateOpt", e)}>
                    <option value="">Date</option>
                    {this.getOptions(1,31)}
                </select>
                <select value={this.state.yearOpt} onChange={(e) => this.handleDate("yearOpt", e)}>
                    <option value="">Year</option>
                    {this.getOptions(thisYear - 60, thisYear)}
                </select>
                    <br />
                    <input type="radio"  value="male" checked={this.state.gender === 'male'} 
                         onChange={this.handleOptionRadio}/>
                    <label >Male</label>
                    <input type="radio" value="female" checked={this.state.gender === 'female'} 
                         onChange={this.handleOptionRadio}/>
                    <label >Female</label>
                    <br />
                <input type='email'
                    name= 'email'
                    value={this.state.newUser.email} 
                    placeholder = 'Email'
                    onChange = {this.handleInput}
                    required
                />
                
                <input type="submit" value="Register"/>
             </form>
            </div>
             
            {this.handleBtnLogin()} 
                
            </div>
         );
       }
     }
    

export default FormRegister;