import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <ul className={styles.btnList}>
        <li>
          <button className={styles.btn} name="good" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            name="neutral"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={styles.btn} name="bad" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
