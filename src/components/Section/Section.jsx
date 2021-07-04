import React, { Component } from 'react'
import { ContentSection, SectionTitle } from './Section.style'

export class Section extends Component {
    render() {
        console.log(this.props)
        return (
            <ContentSection>
                <SectionTitle>{this.props.title}</SectionTitle>
                {this.props.children}
            </ContentSection>
        )
    }
}
