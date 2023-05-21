import PropTypes from "prop-types";
import css from './Section.module.css'

export default function Section ({ title, children }) {
return (
    <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.list}>{children}</ul>
    </section>
)
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}