import { Outlet, useNavigation } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import "./index.css";

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Sidebar />
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
