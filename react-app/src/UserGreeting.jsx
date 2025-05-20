import PropType from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome, {props.username}</h2>
  );
  const loginPrompt = <h2 className="login-prompt">Please log in.</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.PropType = {
  isLoggedIn: PropType.bool.isRequired,
  username: PropType.string.isRequired,
};

export default UserGreeting;
