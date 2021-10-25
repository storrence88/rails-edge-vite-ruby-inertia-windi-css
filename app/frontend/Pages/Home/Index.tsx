import React from "react";
import { Button } from "../../components/Button";

const Homepage = (props) => {
  return (
    <div>
      <h1 className='text-9xl'>Message: {props.message}</h1>
      <Button>This is a button</Button>
    </div>
  );
};

export default Homepage;
