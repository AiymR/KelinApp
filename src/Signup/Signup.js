import React, { Component } from 'react';

import './Signup.css'
import { Container, Header, Button, Input } from 'semantic-ui-react';


class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            signup: true,
        };
        this.routeChange = this.routeChange.bind(this);
    }
    routeChange() {
        let path = `/feed`;
        this.props.history.push(path);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.email]: e.target.value,
            [e.target.password]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            name: this.state.name,
            email: this.state.email
        }
        this.setState({
            name: '',
            email: ''
        })

    }

    toggle() {
        this.setState({
            signup: !this.state.signup
        });
    }

    render() {
        var shown = {
            display: this.state.signup ? "block" : "none"
        };

        var hidden = {
            display: this.state.signup ? "none" : "block"
        }
        return(
            <div className='signForm'>
                <Container>
                    <Button.Group className="btn_wrapper" attached='top'>
                        <Button className='btnSign' onClick={this.toggle.bind(this)}>Sign up</Button>
                        <Button className='btnSign' onClick={this.toggle.bind(this)}>Sign in</Button>
                    </Button.Group>

                    <div style={ shown } className='signupFormContent'>
                        <Header as='h2'>Sign up</Header>
                        <Input placeholder='email' className='inputSign' name='email'
                               onChange = {e => this.handleChange(e)}/>
                        <Input placeholder='password' className='inputSign' name='email'
                               onChange = {e => this.handleChange(e)}/>

                        <Button className='btnSign teal' fluid
                                onClick={(event) => { this.onSubmit(event); this.routeChange();}}>
                            Sign up
                        </Button>
                    </div>

                    <div style={ hidden } className='signinForm'>
                        <Header as='h2'>Sign in</Header>
                        <Input placeholder='First Name' className='inputSign'/>
                        <Input placeholder='Last Name' className='inputSign'/>
                        <Input placeholder='Gender' className='inputSign'/>
                        <Input placeholder='Age' className='inputSign'/>
                        <Input placeholder='Email' className='inputSign' name='email'
                               onChange = {e => this.handleChange(e)}/>
                        <Input placeholder='Create password' className='inputSign' name='email'
                               onChange = {e => this.handleChange(e)}/>

                        <Button className='btnSign teal' fluid
                                onClick={(event) => { this.onSubmit(event); this.routeChange();}}>
                            Sign up
                        </Button>
                    </div>
                </Container>
            </div>

        )
    }
}

export default Signup;
