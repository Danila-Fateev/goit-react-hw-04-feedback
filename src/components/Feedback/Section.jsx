import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.protoTypes = {
  title: PropTypes.string,
  feedback: PropTypes.func.isRequired,
  stats: PropTypes.func.isRequired,
};
