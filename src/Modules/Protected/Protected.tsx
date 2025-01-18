import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Protected(props: any) {
  const { userData }: any = useContext(AuthContext);
  if (localStorage.getItem("userToken") || userData) {
    return props.children;
  } else {
    return <Navigate to={"/"} />;
  }
}
