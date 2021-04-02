import React from 'react';

/* Applying HOC for Point Components */
export function withPoints(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
}
