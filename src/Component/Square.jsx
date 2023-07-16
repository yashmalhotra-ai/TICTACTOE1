import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  return (
    <div
      className="square"
      style={{
        border: "1px solid",
        height: "100px",
        width: "30%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: value === "X" ? "#ffcccc" : "#ccffcc",
        background: value === "O" ? "Blue" : "#ccffcc", 
        cursor: "pointer", 
        borderRadius: "8px", 
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", 
        transition: "background-color 0.5s", 
      }}
      onClick={onClick}
    >
      <h5 style={{ margin: 0 }}>{value}</h5>
    </div>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;