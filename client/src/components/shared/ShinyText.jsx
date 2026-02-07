import '../../assets/styles/home-styles/ShinyText.css';

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
  highlightedColor,
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration, color: highlightedColor }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
