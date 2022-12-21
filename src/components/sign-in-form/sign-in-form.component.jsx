import { useState } from "react";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const SignInForm = () => {
    const defaultFormFields = {
        email: "",
        password: "",
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetForm();
        } catch (e) {
            switch (e.code) {
                case "auth/wrong-password":
                    alert("email or password incorrect");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.warn(e);
            }
        }
    };

    const resetForm = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col gap-y-0">
                <h2 className={"text-xl font-bold"}>
                    Already have an account?
                </h2>
                <span>Sign in with your email and password</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
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

                <div className="grid grid-cols-2 gap-4">
                    <Button type={"submit"}>Sign In</Button>
                    <Button
                        type="button"
                        onClick={signInWithGoogle}
                        buttonType={"google"}
                    >
                        Sign In with Google
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
