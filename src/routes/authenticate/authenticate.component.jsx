import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authenticate = () => {
    return (
        <div className="container my-12">
            <div className="grid grid-cols-2 gap-x-24 w-full">
                <SignInForm />

                <SignUpForm />
            </div>
        </div>
    );
};

export default Authenticate;
