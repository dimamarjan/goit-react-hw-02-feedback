import { Component } from "react";
import { MainSection, TextSection, Button } from "./Facebook.style";

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
        if (counter) {
            return <TextSection>Total: {counter}</TextSection>
        } else return;
    }

    countPositiveFeedbackPercentage() {
        let counter = 0;
        Object.values(this.state).map((item) => (
            counter += item
        ));
        const resultPercent = parseInt(this.state.good / counter * 100);
        if (resultPercent) {
            return <TextSection>Positive feedback: {resultPercent}%</TextSection>
        } else return;
    }
    

    render() {
        return (
            <MainSection>
                <h1>Please leave feedback</h1>
                <div>
                    {Object.keys(this.state).map(keyItem => (
                        <Button
                            key={keyItem}
                            value={keyItem}
                            onClick={this.buttonHeandler}>
                            {keyItem}
                        </Button>
                    ))}
                </div>
                <h2>Statistics</h2>
                <div>
                    {Object.keys(this.state).map(keyItem => (
                        <TextSection key={keyItem}>
                            {keyItem}: {this.state[keyItem]}
                        </TextSection>
                    ))}
                    {this.countTotalFeedback()}
                    {this.countPositiveFeedbackPercentage()}
                </div>
            </MainSection>
            
        )
    };
}