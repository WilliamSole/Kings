import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SigninContainer, SigninTitle, ButtonsBarContainer } from './sign-in.styles.jsx';

// Sign in form for when users do not wish to use Google sign in
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userDetails, setDetails] = useState({ email: '', password: '' })
    
    const { email, password } = userDetails;

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setDetails({...userDetails,  [name]: value })
    }
    
    return (
        <SigninContainer>
            <SigninTitle>I already have an account</SigninTitle>
            <span>Sign in with your email and password</span>

            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign In With Google
                        </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SigninContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);