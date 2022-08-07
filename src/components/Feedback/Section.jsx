import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
