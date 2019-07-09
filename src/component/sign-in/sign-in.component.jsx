import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SigninContainer, SigninTitle, ButtonsBarContainer } from './sign-in.styles.jsx';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(err) {
            console.log(err);
        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <SigninContainer>
                <SigninTitle>I already have an account</SigninTitle>
                <span>Sign in with your email and password</span>

                <form className='sign-in-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='Email'
                        required 
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='Password'
                        required 
                    />
                    
                    <ButtonsBarContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SigninContainer>
        )
    }
}

export default SignIn;