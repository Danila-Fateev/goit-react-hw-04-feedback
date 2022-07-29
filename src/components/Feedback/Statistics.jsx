import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

function Feedback({ good, bad, neutral, total, positiveFeedback }) {
  return (
    <div>
      <ul className={styles.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {total === 0 ? '0' : positiveFeedback}%</li>
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
