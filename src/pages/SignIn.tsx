import { Button, Row } from "antd";
import { useAppDispatch } from "../redux/hooks";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";
import StnForm from "../components/form/StnForm";
import StnInput from "../components/form/StnInput";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0001",
    password: "1234",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("loading in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      toast.success("login success", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      if (err) {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <StnForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <StnInput type="text" name="userId" label="ID" />
        <StnInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </StnForm>
    </Row>
  );
};

export default SignIn;
