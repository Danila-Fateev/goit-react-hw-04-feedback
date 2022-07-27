import React, { Component } from 'react';

import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = (good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage);
  };
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section
          title="Please leave feedback"
          feedback={<FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />}
          stats={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              posFeedback={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </div>
    );
  }
}
