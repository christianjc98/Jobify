import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Alert, FormRow, Logo } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(initialState);
  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useAppContext();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = value;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{value.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!value.isMember && (
          <FormRow
            name="name"
            type="text"
            value={value.name}
            labelText="Name"
            handleChange={handleChange}
          />
        )}
        <FormRow
          name="email"
          type="email"
          value={value.email}
          labelText="Email"
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={value.password}
          labelText="Password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {value.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {value.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
