import React ,{Component}from 'react';
// import ReactDOM from 'react-dom';
// import ReactTooltip from 'react-tooltip'

class FormRegister extends Component{

    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {},
            phoneNumber:'',
            firstName:'',
            lastName:'',
            email:'',
            birthDate:'',
            monthOpt:'',
            dateOpt:'',
            yearOpt:'',
            gender:'',
            showComponent:''
        }

        this.setGender = this.setGender.bind(this);
        this.update = this.update.bind(this);
     }

    handleValidation(){
        return true;
    }

    handleSubmit(e){
        e.preventDefault();

        var form = e.target;
        

        if(this.handleValidation()){
        alert("Form submitted");
        }else{
        alert("Form has errors.")
        }
     }
 
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    update = (name, e2) => {
        this.setState({ [name]: e2.target.value });
        
        let i =  this.state.yearOpt+"-"+this.state.monthOpt+"-"+this.state.dateOpt;
        this.setState({birthDate: i});
        if(this.state.yearOpt!='' && this.state.monthOpt!='' && this.state.dateOpt!=''){
            this.setState({birthDate: i});
        }

        
        console.log(this.state.birthDate);
        
        console.log("value "+e2.target.value);

    }

    setGender(ee) {
        if(this.state.showComponent){
            this.setState({gender : 'male'});
        }else{
            this.setState({gender : 'female'});
        }
        this.setState({showComponent : !this.state.showComponent})

        console.log(this.state.gender);
    }

    render(){

        const dateOption = [];
        for (let i = 1; i <= 31; i++) {
            dateOption.push(<option key={i} value={i}>{i}</option>)
        }

        const month = {1: 'January', 2: 'February', 3:'March', 4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'};        
        const monthOption = Object.keys(month).map(key => 
            <option key={key} value={key}>{month[key]}</option>
        )

        const yearOption = [];
        for (let i = 2020; i >= 1945; i--) {
            yearOption.push(<option key={i} value={i}>{i}</option>)
        }

        return(
            <form onSubmit={this.handleSubmit.bind(this)} className="App-form">
                <h2>Registration</h2>

                <input type="text" placeholder="Mobile number" required value={this.state.phoneNumber} 
                onChange={(e) => this.update("phoneNumber", e)}/>

                <input type="text" placeholder="First name" required value={this.state.firstName} 
                onChange={(e) => this.update("firstName", e)}/>

                <input type="text" placeholder="Last name" required value={this.state.lastName} 
                onChange={(e) => this.update("lastName", e)}/>
                <label>Date of Birth</label> <br />
                <select value={this.state.monthOpt} onChange={(e) => this.update("monthOpt", e)}>
                    <option value="">Month</option>
                    {monthOption}
                </select>
                <select value={this.state.dateOpt} onChange={(e) => this.update("dateOpt", e)}>
                    <option value="">Date</option>
                    {dateOption}
                </select>
                <select value={this.state.yearOpt} onChange={(e) => this.update("yearOpt", e)}>
                    <option value="">Year</option>
                    {yearOption}
                </select>
                <br />
                    <input type="radio" id="male" name="gender" value="male" onChange={this.setGender} checked={this.state.showComponent}/>
                    <label >Male</label>
                    <input type="radio" id="female" name="gender" value="female"  onChange={this.setGender} checked={!this.state.showComponent}/>
                    <label >Female</label>
                    <br />
                <input type="text"placeholder="Email" required value={this.state.email} 
                onChange={(e) => this.update("email", e)}/>
                <input type='submit' value='Register' />

                {/* <ReactTooltip /> */}

                {/* {this.state.submittedData && <pre>
                {JSON.stringify(this.state.submittedData, null, 2)}
            </pre>} */}

            </form>            
        );
    }
        
}

export default FormRegister;