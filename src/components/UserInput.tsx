import * as React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { setUsername } from "../store/actions";
interface IState {
  Name: string;
}

const UserInput: React.FC = () => {
  const [user, setUser] = React.useState<IState>({
    Name: ""
  });

  const [error, setError] = React.useState("");

  const submitForm = () => {
    if (user && user.Name) {
      setError("");
      setUsername(user.Name);
      setUser({ Name: "" });
    } else {
      setError("Please Fill all the fields");
    }
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    submitForm()
  }

  return (
    <React.Fragment>
      <Form onSubmit={(e: any) => onFormSubmit(e)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              className="input_field"
              value={user && user.Name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                let value = e.target.value;
                setUser({ Name: value });
              }}
            />
          </Form.Group>
        </Form.Row>

        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" type="button" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default UserInput;
