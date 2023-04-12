import React from "react";
import Auth from "../contexts/Auth";

const AuthentificatedRoute = ({ path, component }) => {
  const { isAuthentificated } = useContext(Auth);

  return isAuthentificated ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to="/login/" />
  );
};

export default AuthentificatedRoute;
