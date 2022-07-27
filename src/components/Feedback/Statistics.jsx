import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

function Feedback({ good, bad, neutral, total, posFeedback }) {
  return (
    <div>
      <h2>Statistics</h2>
      <ul className={styles.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {total === 0 ? '0' : posFeedback}%</li>
      </ul>
    </div>
  );
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};
