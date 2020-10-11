import React from 'react';
import InputField from './components/InputField';
import Button from './components/Button';
import BigFormText from './components/BigFormText';

function Login(props){
    return(
        <div className="Login">
            <BigFormText bigText="Login"/>
            <form action="" className="form">
                <InputField type="email" name="email" id="email" placeholder="Email" />
                <InputField type="password" name="passwd" id="passwd" placeholder="Password" />
                <Button formButtonName="Login" onClick={console.log('Hey')}/>
                
                
            </form>
    </div>
    );
    
}

export default Login;