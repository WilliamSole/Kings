import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// Custom button for flexibilty and reusability
const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}> {children} </CustomButtonContainer>
);

export default CustomButton;