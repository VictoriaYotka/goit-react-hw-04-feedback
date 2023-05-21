import { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (key) => {
    this.setState(prevState => { 
      return {[key]: prevState[key] + 1}})  
  }

  countTotalFeedback = () => {
      return Object.values(this.state).reduce((acc, el) => acc + el, 0 )
  }


  countPositiveFeedbackPercentage = () => {
      return Math.round(100 / (this.countTotalFeedback()) * this.state.good)
  }

  render () {
    const options = Object.keys(this.state);
    return (
    <>
    <Section 
      title="Please leave feedback"
      children={
        <FeedbackOptions 
          props={options}
          handleClick={this.handleClick}
        />}
    />

    <Section title="Statistics" children={
      < Statistics 
        props={this.state}
        total={this.countTotalFeedback}
        percentage={this.countPositiveFeedbackPercentage}
      />}
    />
    </>
    )
  }


}
