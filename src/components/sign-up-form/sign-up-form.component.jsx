import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignUpForm = () => {
    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocFromAuth(user, {
                displayName,
            });

            resetForm();
        } catch (e) {
            if (e.code === "auth/email-already-in-use") {
                alert("cannot create user, email already in use");
            } else {
                console.warn(e.message);
            }
        }
    };

    const resetForm = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col gap-y-0">
                <h2 className={"text-xl font-bold"}>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                <FormInput
                    label={"Display Name"}
                    inputOptions={{
                        type: "text",
                        required: true,
                        onChange: handleChange,
                        value: displayName,
                        name: "displayName",
                    }}
                />
                <FormInput
                    label={"Email"}
                    inputOptions={{
                        type: "email",
                        required: true,
                        onChange: handleChange,
                        value: email,
                        name: "email",
                    }}
                />
                <FormInput
                    label={"Password"}
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        value: password,
                        name: "password",
                    }}
                />
                <FormInput
                    label={"Confirm Password"}
                    inputOptions={{
                        type: "password",
                        required: true,
                        onChange: handleChange,
                        value: confirmPassword,
                        name: "confirmPassword",
                    }}
                />

                <Button type={"submit"}>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
