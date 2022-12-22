import PropTypes from "prop-types";

const Button = ({ mood, img, handleMoodChange }) => {
  return (
    <input
      type="image"
      src={img}
      alt={mood}
      onClick={() => handleMoodChange(mood)}
    />
  );
};

Button.propTypes = {
  handleMoodChange: PropTypes.func.isRequired,
  mood: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Button;
