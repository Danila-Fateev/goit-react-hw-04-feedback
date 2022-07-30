import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={styles.btnList}>
        {options.map((el, index) => (
          <li key={index}>
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
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
