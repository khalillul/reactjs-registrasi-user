import React from 'react';


const Select = (props) => {
	return(<div>
			<label > {props.title} </label>
		    <select
		      id = {props.name}
		      name={props.name}
		      value={props.value}
		      onChange={props.handleChange}
              >
		      <option value="" disabled>{props.placeholder}</option>
		      {props.options.map(option => {
		        return (
		          <option value={option}>{option}</option>
		        );
		      })}
		    </select>
  </div>)
}

export default Select;