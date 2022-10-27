import { Button, Link as MuiLink, TextField } from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLoginUser } from "../apis/hooks/users-mutations";
import { LoginUserResponse } from "../apis/mutations/user-login-mutation";
import { useStore } from "../store";

type Props = {};

function LoginForm({}: Props) {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const { mutateAsync } = useLoginUser();
  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (!email || !password) {
      setErrorEmail(!email);
      setErrorPassword(!password);
      return;
    }
    const { data }: any = await mutateAsync({
      email,
      password,
    });
    const res: LoginUserResponse = data;
    console.log("response", res);
    setUser(res);
    navigate("/");
  };
  return (
    <>
      {user && <div>Logged in as {user.email}</div>}
      <div className="flex justify-center items-center flex-col h-screen gap-8">
        <h1 className="font-roboto font-bold text-6xl">Cryptos Login</h1>
        <div className="flex flex-col gap-2">
          <TextField
            label="Email"
            className="w-80 bg-black"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={errorEmail ? "Email is required" : ""}
            error={errorEmail}
          />
          <TextField
            label="Password"
            className="w-80 bg-black"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={errorPassword ? "Password is required" : ""}
            error={errorPassword}
          />
          <Link to="signup" className="justify-start self-start mt-2">
            <MuiLink component="button" variant="body2">
              SignUp
            </MuiLink>
          </Link>
        </div>
        <Button variant="contained" className="w-80" onClick={handleSignUp}>
          <span className="p-1">Login</span>
        </Button>{" "}
        <Outlet />
      </div>
    </>
  );
}

export default LoginForm;
