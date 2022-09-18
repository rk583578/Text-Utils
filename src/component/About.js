import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function About() {
  const [btnText, setbtnText] = useState("Dark Mode");
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const changeColor = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setbtnText("Light Mode");
    } else {
      setmyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setbtnText("Dark Mode");
    }
  };

  return (
    <>
      <div style={myStyle} className="container">
        <h2 className="text-center my-3" style={myStyle}>
          About Us
        </h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header
              style={myStyle}
              className="accord-but"
              type="button"
            >
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={myStyle} eventKey="1">
            <Accordion.Header style={myStyle}>
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item style={myStyle} eventKey="2">
            <Accordion.Header style={myStyle}>
              Accordion Item #3
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Button variant="primary my-2" onClick={changeColor}>
        {btnText}
      </Button>
    </>
  );
}

export default About;
