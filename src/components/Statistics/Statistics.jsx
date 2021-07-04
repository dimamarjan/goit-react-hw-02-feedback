import React, { Component } from 'react'
import {StatList, StatListItem} from './Statistics.style'


export class Statistics extends Component {

    render() {
        return (
            <StatList>
                <StatListItem>Good: {this.props.good}</StatListItem>
                <StatListItem>Neutral: {this.props.neutral}</StatListItem>
                <StatListItem>Bad: {this.props.bad}</StatListItem>
            </StatList>
        )
    };
}



