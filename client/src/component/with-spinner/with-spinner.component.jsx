import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// HOC that takes a component and decides whether to return the loading icon or the original component
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner;
}

export default WithSpinner;