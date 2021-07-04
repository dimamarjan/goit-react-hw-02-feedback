import { Component } from "react";
import { MainSection, Button, NoStatContent } from "./Facebook.style";
import { Statistics } from "../Statistics/Statistics"


export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    buttonHeandler = (event) => {
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
            <MainSection>
                <h1>Please leave feedback</h1>
                <div>
                <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
                    {Object.keys(this.state).map(keyItem => (
                        <Button
                            key={keyItem}
                            value={keyItem}
                            onClick={this.buttonHeandler}>
                            {keyItem}
                        </Button>
                    ))}
                </div>
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
            </MainSection>
            
        )
    };
}