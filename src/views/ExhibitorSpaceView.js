import LoginView from "./LoginView";
import ExhibitopSpaceConnectedView from "./ExhibitorSpaceConnectedView";
import {useContext} from "react";
import Auth from "../contexts/Auth";

export default function ExhibitopSpaceView(props) {
  const {isAuthentificated}=useContext(Auth);
  if (isAuthentificated) {
    return <ExhibitopSpaceConnectedView />;
  }
  return <LoginView />;
}
