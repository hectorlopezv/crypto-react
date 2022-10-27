import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../store";

const PrivateRoutes = () => {
  const user = useStore((state) => state.user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
