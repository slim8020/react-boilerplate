import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledText = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
`;

const MyComponent: React.FC = () => {
  return <StyleButton>Click me!</StyleButton>;
};

const App: React.FC = () => {
  return (
    <div>
      <div style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
        Inline style
      </div>
      <StyledText>CSS-in-JS</StyledText>
      <div className="button">Sass</div>
      <MyComponent />
    </div>
  );
};

export default App;
