import { useState } from "react";

// 1. Name
// 2. Email
// 3. password
// 4. submit button

const SignupForm = (props) => {
  // input fields (one per item) ==> onChange
  // button for submit
  // labels
  // validation?
  // <form> onSubmit
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
    console.log("form submitted:", { name, email, password });
    setFormSubmitted(true);

    const data = { name, email, password }; // { name: "jatas", email: "asdasd", password: "asdada" }

    // make an API POST with the data to the server to validate login
  };
  // onSubmit={(e) => formSubmit(e)} can be rewriten also as onSubmit={formSubmit}
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {isFormSubmitted && (
        <div>
          {name} - {email} Account created!
        </div>
      )}
    </div>
  );
};

export default SignupForm;
