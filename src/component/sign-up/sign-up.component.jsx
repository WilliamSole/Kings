import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

// Sign up to create a new user in the firestore database
const SignUp = ({ signUpStart }) => {
    const [userDetails, setDetails] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });

    const { displayName, email, password, confirmPassword } = userDetails;

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        
        setDetails({ ...userDetails, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>

                <FormInput
                    name='displayName'
                    type='text'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />

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

                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='submit'>Sign Up</CustomButton>

            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userDetails => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);
