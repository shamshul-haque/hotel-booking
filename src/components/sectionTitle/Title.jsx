import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-5">{children}</h1>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
