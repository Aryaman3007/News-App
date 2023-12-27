import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../components/InputControl";
import { auth } from "../config/firebase";
import Navbar from "../components/Navbar/Navbar";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-purple-600 to-purple-300 flex flex-col justify-center items-center">
        <div className="min-w-[480px] w-auto bg-white shadow-md p-8 rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold text-black mb-4">Signup</h1>

          <InputControl
            label="Name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <div className="footer flex flex-col gap-5">
            <b>{errorMsg}</b>
            <button
              onClick={handleSubmission}
              disabled={submitButtonDisabled}
              className="outline-none border-none flex justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-md font-bold text-base px-4 py-2 w-full transition duration-100 cursor-pointer disabled:cursor-not-allowed">
              Signup
            </button>
            <p className="font-bold text-black inline-block text-base">
              Already have an account?{" "}
              <span className="font-bold text-purple-600 hover:underline text-base">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;