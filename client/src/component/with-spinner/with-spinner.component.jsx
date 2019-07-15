import React from 'react';

import Spinner from '../spinner/spinner.component';

// HOC that takes a component and decides whether to return the loading icon or the original component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner;