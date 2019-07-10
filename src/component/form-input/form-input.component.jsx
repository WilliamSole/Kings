import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

// Used for sign in and sign up forms
const FormInput = ({ handleChange, label, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {label ? (
            <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                {label}
            </FormInputLabel>
        ) : null}
    </GroupContainer>
)

export default FormInput;