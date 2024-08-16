import PropTypes from 'prop-types';

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md border-2 border-black`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
};

export default Card;
