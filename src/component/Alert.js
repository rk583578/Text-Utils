import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


export default function AlertDismissibleExample(props) {
  const [show, setShow] = useState(true);

  const capitalize =(word)=>{
    // const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (show) {
    return (
     props.alert && <Alert variant={props.alert.type} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{capitalize( props.alert.type)}</Alert.Heading>
        <p>
        {props.alert.message}
        </p>
      </Alert>
    );
  }
}