/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UserSignUp({
  onOpenSignIn,
  onHandleAddUser,
  onUserLogin,
}) {
  const [userSignIn, setSignUp] = useState(1);

  function handleTabMode(id) {
    setSignUp(id);
  }
  return (
    <section className="max-w-7xl mx-auto overflow-hidden">
      <div className="flex justify-center">
        <Logo onOpenSignIn={onOpenSignIn} />
      </div>
      <Tab handleTabMode={handleTabMode} userSignIn={userSignIn} />
      {userSignIn === 1 ? (
        <SignIn onUserLogin={onUserLogin} />
      ) : (
        <SignUp onHandleAddUser={onHandleAddUser} />
      )}
    </section>
  );
}

function SignIn({ onUserLogin }) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  function handleUserLogin() {
    onUserLogin(email, passwd);
  }
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center font-bold py-4 tracking-tighter text-gray-600 text-xl uppercase">
        Sign In With Email
      </h2>
      <form action="##" className="w-[50%] mx-auto" onSubmit={handleUserLogin}>
        <div className="py-8">
          <label htmlFor="email" className="font-bold text-gray-500 capitalize">
            Email Address:
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="border-b-2 p-1 border-green-600 outline-none w-full"
            placeholder="johnsmith@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="passwd"
            className="capitalize font-bold text-gray-500"
          >
            Password:
          </label>
          <br />
          <input
            type="password"
            id="passwd"
            className="border-b-2 border-green-600 outline-none w-full"
            required
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </div>
        <button className="button">Sign In</button>
        <p className="text-center pb-4 underline">
          <a href="##">Forget Password?</a>
        </p>
      </form>
    </div>
  );
}

function Tab({ handleTabMode, userSignIn }) {
  return (
    <div className="flex justify-center w-max-7xl mx-auto">
      <button
        className={`p-4 border-green-600 uppercase ${
          userSignIn === 0 ? "border-x-2 border-t-2" : "border-b-2"
        }`}
        onClick={() => handleTabMode(0)}
      >
        New To MindSpace
      </button>
      <button
        className={`p-4 border-green-600 uppercase ${
          userSignIn === 1 ? "border-x-2 border-t-2" : "border-b-2"
        }`}
        onClick={() => handleTabMode(1)}
      >
        Already Registered
      </button>
    </div>
  );
}

function SignUp({ onHandleAddUser }) {
  const [userFullName, setFullName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userZipCode, setZipCode] = useState("");
  const [userDesignation, setDesignation] = useState("");
  const [userPasswd, setPasswd] = useState("");

  function addUser(e) {
    e.preventDefault();
    const user = {
      userFullName,
      userName,
      userEmail,
      userZipCode,
      userDesignation,
      userPasswd,
    };
    onHandleAddUser(user);
  }
  return (
    <form
      className="pt-12 max-w-7xl mx-auto overflow-hidden px-8"
      action="##"
      onSubmit={addUser}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div>
          <label htmlFor="name" className="font-semibold capitalize">
            Full Name
          </label>
          <br />
          <input
            type="text"
            name="full-name"
            placeholder="Full Name"
            required
            value={userFullName}
            onChange={(e) => setFullName(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
        <div>
          <label htmlFor="user-name" className="font-semibold capitalize">
            User Name
          </label>
          <br />
          <input
            type="text"
            name="user-name"
            placeholder="John123"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold capitalize">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="johnsmith@example.com"
            required
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="font-semibold capitalize">
            Zip Code
          </label>
          <br />
          <input
            type="text"
            name="zipCode"
            placeholder="123456"
            required
            value={userZipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
        <div>
          <label htmlFor="designation" className="font-semibold capitalize">
            Designation
          </label>
          <br />
          <input
            type="text"
            name="designation"
            placeholder="student"
            required
            value={userDesignation}
            onChange={(e) => setDesignation(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
        <div>
          <label htmlFor="passwd" className="font-semibold capitalize">
            Password
          </label>
          <br />
          <input
            type="text"
            name="passwd"
            required
            value={userPasswd}
            onChange={(e) => setPasswd(e.target.value)}
            className="outline-none border-b-2 border-green-600 w-full"
          />
        </div>
      </div>
      <button className="button">Submit</button>
    </form>
  );
}

function Logo({ onOpenSignIn }) {
  return (
    <a href="##" className="relative z-10" onClick={onOpenSignIn}>
      <img
        src="website/logo/trans_bg.png"
        alt="Mindspace Logo"
        className="cursor-pointer w-[150px]"
      />
    </a>
  );
}
