import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={styles.btnList}>
        {options.map(el => (
          <li>
            <button className={styles.btn} name={el} onClick={onLeaveFeedback}>
              {el}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
