import * as React from "react";

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => {
  return <h1>Hello, {props.name}! Welcome to React and TypeScript.</h1>;
};

Header.defaultProps = {
  name: "Team"
};

export default Header;
