import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "@/context/AuthContext";
import { parseCookies } from "nookies";
import * as ls from "@/utils/localstorageSlim";

export default function NeedAuthentication() {
  const token = ls.get("saturn-api.token");
  return !token ? <Navigate to={"/login"} /> : <Outlet />;
}
