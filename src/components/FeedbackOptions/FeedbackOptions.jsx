import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions ({props, handleClick}) {
    return (
        <>
        {props.map(option => <li key={option} className={css.item}>
            <button className={css.button} onClick={()=>handleClick(option)}>{option}</button>
        </li>)}
        </>
    )
}

FeedbackOptions.propTypes = {
    props: PropTypes.array,
    handleClick: PropTypes.func,

}