import PropTypes from "prop-types";

const ButtonIntro = ({ mood, img, handleMoodChange }) => {
  return (
    <div>
      <input
        type="image"
        src={img}
        alt={mood}
        onClick={() => handleMoodChange(mood)}
      />
      <h2>{mood}</h2>
    </div>
  );
};

ButtonIntro.propTypes = {
  handleMoodChange: PropTypes.func.isRequired,
  mood: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ButtonIntro;
