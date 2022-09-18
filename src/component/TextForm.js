import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function TextForm(props) {
  const [text, setText] = useState("");

  const getValue = (event) => {
    setText(event.target.value);
  };
  const toUpper = () => {
    let result = text.toUpperCase();
    setText(result);
    props.showAlert("Converted to Uppercase", "success")
  };
  const toLower = () => {
    let result = text.toLowerCase();
    setText(result);
    props.showAlert("Converted to Lowercase", "success")
  };

  const toClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success")
  };
  const toCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard", "success")
  };

  const removeSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space removed", "success")
  };

  return (
    <>
      <Form>
        <h2
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h2>

        <InputGroup>
          <Form.Control
            id="myBox"
            placeholder="Enter your Text..."
            value={text}
            onChange={getValue}
            className={`mb-3 bg-${props.mode === "light" ? "light" : "secondary"}
                        text-${props.mode === "dark" ? "light" : "dark"}`}
            as="textarea"
            aria-label="With textarea"
            rows={10}
          />
        </InputGroup>

        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            id="myBox"
            placeholder="Enter your Text..."
            value={text}
            onChange={getValue}
            as="textarea"
            rows={10}
          />
        </Form.Group> */}
        <Button onClick={toUpper} variant="primary mx-2 my-2">
          Convert to Uppercase
        </Button>
        <Button onClick={toLower} variant="primary mx-2 my-2">
          Convert to Lowercase
        </Button>
        <Button onClick={toClear} variant="primary mx-2 my-2">
          Clear
        </Button>
        <Button onClick={toCopy} variant="primary mx-2 my-2">
          Copy Text
        </Button>
        <Button onClick={removeSpace} variant="primary mx-2 my-2">
          Remove Extra Space
        </Button>
      </Form>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words</p>
        <p>{text.length} Character</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
