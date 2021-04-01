import React from 'react';

/* Applying HOC for Point Compo */
export function withPoints(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handlePointsGiven = this.handlePointsGiven.bind(this);
            this.state = {
                pointsGiven: 0
            };
        }
        handlePointsGiven() {
            this.setState({
                pointsGiven: this.state.pointsGiven + 1
            });
        }
        render() {
            return (
                <WrappedComponent points={this.state.pointsGiven}
                                  handleAddPoints={this.handlePointsGiven}
                                  {...this.props} />
            );
        }
    }
}
