import React, { useState, useEffect } from 'react';

const ColorButton = ({ color, children }) => (
  <button style={{ backgroundColor: color }} className="color-button">
    {children}
  </button>
);

const App = () => {
  const [colors, setColors] = useState(['red', 'yellow', 'green', 'white', 'black']);

  const cssStyles = `
    .color-button {
      padding: 10px 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      display: inline-block;
    }

    .parent-div {
      display: flex;
      flex-direction: column;
    }
  `;

  return (
    <div className="parent-div">
      <style>{cssStyles}</style>
      {colors.map((color, index) => (
        <ColorButton key={index} color={color}>
          {color}
        </ColorButton>
      ))}
    </div>
  );
};

export default App;