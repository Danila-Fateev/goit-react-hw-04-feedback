import PropTypes from 'prop-types';

export default function Section({ title, feedback, stats }) {
  return (
    <>
      <h2>{title}</h2>
      {feedback}
      {stats}
    </>
  );
}

Section.protoTypes = {
  title: PropTypes.string,
  feedback: PropTypes.func.isRequired,
  stats: PropTypes.func.isRequired,
};
