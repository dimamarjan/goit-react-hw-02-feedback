import { Component } from "react";
import { NoStatContent } from "./Facebook.style";
import { Statistics } from "components/Statistics/Statistics"
import { FacebookOptions } from "components/FacebookOptions/FacebookOptions"
import { Section } from "components/Section/Section";


export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    buttonHandler = (event) => {
        this.setState((prevState) => ({
            [event.target.value]: prevState[event.target.value] +1}))
    };


    countTotalFeedback() {
        let counter = 0;
        Object.values(this.state).map((item) => (
            counter += item
        ));
        return counter;
    }


    countPositiveFeedbackPercentage() {
        let counter = 0;
        Object.values(this.state).map((item) => (
            counter += item
        ));
        const resultPercent = parseInt(this.state.good / counter * 100);
        return resultPercent;
    }
    
    

    render() {
        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FacebookOptions
                        options={this.state}
                        onLeaveFeedback={this.buttonHandler} />
                </Section>
                <Section title={'Statistics'}>
                    {this.countTotalFeedback() !== 0 ? 
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}>
                        </Statistics>
                        : <NoStatContent>No feedback given</NoStatContent>
                    }
                </Section>
            </>
        )
    };
}