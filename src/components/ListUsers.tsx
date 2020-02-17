import * as React from "react";
import { connect } from "react-redux";
import { removeUser, selectRandomUser } from "../store/User/userActions";
import Button from "react-bootstrap/Button";
interface IProps {
  users?: any;
  randomUser?: string | "";
}

const ListUsers: React.FC<IProps> = (props: IProps) => {
  const deleteName = (user: string, id: number) => {
    if (window.confirm("Are you sure to delete user " + user + "?")) {
      removeUser(user);
    } else {
      alert("stay here.");
    }
  };

  const selectRandom = () => {
    selectRandomUser();
  };

  return (
    <div className="user_list_wrapper">
      <div className="all_user_list">
        <p>List of users</p>
        {props.users.map((user: string, id: number) => {
          return (
            <button key={id} onClick={() => deleteName(user, id)}>
              {user}
            </button>
          );
        })}
      </div>
      <div className="random_user">
        <Button onClick={() => selectRandom()}>
          Click Me to select random user
        </Button>
        <br />

        {props.randomUser && <button>{props.randomUser}</button>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { users: state.user.userList, randomUser: state.user.randomUser };
};
export default connect(mapStateToProps)(ListUsers);
