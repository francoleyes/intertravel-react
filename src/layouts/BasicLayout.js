import {Navbar} from "./Navbar";

export function BasicLayout(props) {
  const { children } = props;

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
