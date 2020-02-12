import React from 'react';
import "./style.css";
const Form = props=>{
    return(
        <div className="container">
            <div>{props.error ? error():null}</div>
            <form onSubmit={props.loadWeather}>
            <div className="row ">
                <div className="col-md-3 offset-md-2 text-capitalize">
                    <input type="text" className="form-control" name="City" autoComplete="off" placeholder="Enter City"/>
                </div>
                <div className="col-md-3 text-capitalize">
                <input type="text" className="form-control" name="Country" autoComplete="off" placeholder="Enter Country"/>
                </div>
                <div className="col-md-3 mt-md-0 py-2 text-md-left text-capitalize">
                <button className="btn btn-warning">Get Weather </button>
                </div>
            </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">Please Enter City and Country</div>
    )
}
export default Form;