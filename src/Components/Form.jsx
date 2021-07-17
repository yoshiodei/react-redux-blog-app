import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: "",
            id: ""
           }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value, id:  Math.random().toString()});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addBlog(this.state);
        this.setState({name: "",
        email: "",
        gen: "",
        id: ""})
    }

    render() {
        return (
        <>

            <form onSubmit={this.handleSubmit}>
                <label >Name</label>
                <input type="text" name="name" placeholder="Please enter name"  value={this.state.name} onChange={this.handleChange}/>
                <label >Email</label>
                <input type="email" name="email" placeholder="Please enter email"  value={this.state.email} onChange={this.handleChange}/>
                <label >Gen</label>
                <input type="number" name="gen"  value={this.state.gen} onChange={this.handleChange}/>
                <input type="submit" className="submit" value="Post" placeholder="Please specify gen"/>
            </form>
        </>
        );
    }
}

export default Form;
