import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        //process error
        return { hasErrored: true };
    }
    
    componentDidCatch(err, info) {
        console.log(err, info);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/Q2BAOd2.png'/>
                    <ErrorImageText>Sorry but we can't seem to find this page. Must of taken a wrong turn somewhere</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;