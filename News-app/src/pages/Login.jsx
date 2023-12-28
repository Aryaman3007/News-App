import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../components/InputControl";
import { auth } from "../config/Firebase"

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-r from-purple-600 to-purple-300  flex flex-col justify-center items-center px-4">
                <div className="h-auto md:w-[480px] bg-white shadow-md p-8 rounded-2xl flex flex-col justify-center items-center w-full">
                    <h1 className="text-3xl font-semibold text-black mb-4">Login</h1>

                    <InputControl
                        label="Email"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                    />
                    <InputControl
                        label="Password"
                        type="password"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                        placeholder="Enter Password"
                    />

                    <div className="footer flex flex-col gap-5">
                        <b className="font-bold text-xs text-red-600 text-center">{errorMsg}</b>
                        <button
                            disabled={submitButtonDisabled}
                            onClick={handleSubmission}
                            className="outline-none border-none flex justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-md font-bold text-base px-4 py-2 w-full transition duration-100 cursor-pointer disabled:cursor-not-allowed">
                            Sign In
                        </button>
                        <p className="font-bold text-black inline-block text-base">
                            Don't have an account?{" "}
                            <span className="font-bold text-purple-600 hover:underline text-base">
                                <Link to="/signup">Sign up</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;