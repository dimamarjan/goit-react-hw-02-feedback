import React, { Component } from 'react';
import { ActionButton } from './FeedbackOptions.styled';


export class FacebookOptions extends Component {

    render() {
        return (
            <>
                {Object.keys(this.props.options).map((stateItem) => (
                    <ActionButton key={stateItem} onClick={this.props.onLeaveFeedback} value={stateItem}>{stateItem}</ActionButton>
                ))}
            </>
        )
    };
}
