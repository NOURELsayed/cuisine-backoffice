import React, { Component } from 'react'
import './style.css'
import Logo from './../../assets/images/Logo Topbar@3x.png'
import axios from 'axios'
export default class payment extends Component {
    state = {
        username: '',
        password: '',
        error_msg: ''

    }

    handelChange = (event) => {
        let target = event.target;

        target.name == "username" ?

            this.setState({
                username: target.value

            })
            :
            this.setState({
                password: target.value
            })
    }
    handelLogin = () => {
        const {username, password} = this.state;
        return axios
        .post(`http://localhost:8000/api/v1/api-token-auth/`, { username, password })
        .then(({data})=>{
            // store token to localstorage
            localStorage.setItem('tk', data.token);
            return data.token
        })
        
    }
    handelSubmit = () => {
        const {history} = this.props;
        if (this.state.username && this.state.password) {
            this.handelLogin().then((res)=>{
                history.push('/home')
            }).catch((err)=>{

                // alert(JSON.stringify(err))
                this.setState({error_msg:"Invalid Credentials"})
    
            })
        }
        // (this.state.username == "Admin" || this.state.username == "admin") && this.state.password == "admin" ?
        //     alert("Ezak ya admin mnwar t3shrab shay")
        //     : alert("yala mn hwena")

    }

    render() {
    const {error_msg} = this.state;
        return (
            <div className='login-screen'>
                <div className='LogContainer'>
                    <div className='imgcont'>
                        <img className='imageC' src={Logo} />
                    </div>
                    <div className='attr'>
                        <p className='word'>User name</p>
                        <input
                            name="username"
                            className='inputfield'
                            // value={this.state.username}
                            onChange={this.handelChange}
                        />
                    </div>
                    <div className='attr'>
                        <p className='word'>Password</p>
                        <input
                            name="pass"
                            type='password'
                            className='inputfield'
                            // value={this.state.password}
                            onChange={this.handelChange}
                        >
                        </input>
                    </div>
                    <div className='forget'>
                        <div className="error_msg">{error_msg}</div>
                        <p>Forget my password</p>
                        <button onClick={() => this.handelSubmit()}
                        > Sign in</button>

                    </div>
                </div>
                <div className='have-account'>
                    <p className='have'> Dont have an account? </p>
                    <p className='create'>Create an account</p>
                </div>
            </div>



        )
    }
}