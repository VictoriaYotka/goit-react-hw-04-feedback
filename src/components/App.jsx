import { useState } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleClick = (key) => {
    setState(prevState => { 
      return {...prevState, [key]: prevState[key] + 1}})  
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, el) => acc + el, 0 )
}

  const countPositiveFeedbackPercentage = () => {
      return Math.round(100 / (countTotalFeedback()) * state.good)
  }

  return (
    <>
    <Section 
      title="Please leave feedback"
      children={
        <FeedbackOptions 
          props={Object.keys(state)}
          handleClick={handleClick}
        />}
    />

    <Section title="Statistics" children={
      < Statistics 
        props={state}
        total={countTotalFeedback}
        percentage={countPositiveFeedbackPercentage}
      />}
    />
    </>
    )
}