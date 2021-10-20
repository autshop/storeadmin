import { FC } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
//
import { LoginFormTypes } from "utils/forms/types";
import { createFieldErrorFromHookFromError } from "utils/forms/helpers";
import { AuthActions } from "redux/auth/slice";
//
import css from "./style.module.scss";

const Login: FC = () => {
    const { register, handleSubmit, errors } = useForm<LoginFormTypes>();

    const dispatch = useDispatch();

    const handleLoginSubmit = (formData: LoginFormTypes) => dispatch(AuthActions.loginUserRequest(formData));

    return (
        <div className={css["Login"]}>
            <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
                <div className={css["Login__container"]}>
                    <div className={css["Login__container__item"]}>
                        <TextField
                            className={css["Login__container__item"]}
                            label="Email"
                            id="email"
                            name="email"
                            inputRef={register({ required: true })}
                            required={true}
                            {...createFieldErrorFromHookFromError("email", errors, "Please fill this field!")}
                        />
                    </div>
                    <div className={css["Login__container__item"]}>
                        <TextField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            inputRef={register({ required: true })}
                            required={true}
                            {...createFieldErrorFromHookFromError("password", errors, "Please fill this field!")}
                        />
                    </div>
                    <div className={css["Login__container__item"]}>
                        <Button type="submit" variant="contained" color="primary">
                            <b>Login</b>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Login;
