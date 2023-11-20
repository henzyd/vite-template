import { useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Formik } from "formik";
import FormField from "~/components/form-field";
import useLogin from "~/mutations/auth/login";

export default function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const login = useLogin();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const response = await login.mutateAsync(values);

        if (response) {
          navigate(state?.from || "/", { replace: true });
        }
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormField name="email" label="Email" type="email" />
          <FormField name="password" label="Password" type="password" />
          {login.isError && (
            <p className="text-sm text-red-500">invalid email/password combination</p>
          )}
          <LoadingButton loading={login.isPending} type="submit">
            Login
          </LoadingButton>
        </form>
      )}
    </Formik>
  );
}
