import Features from "./Features";
import Header from "./Header/Header";
import HowItWorks from "./HowItWorks";
import Mission from "./Mission";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState } from "react";
import Hero from "./Header/Hero";
import NavBar from "./Header/NavBar";
import UserSignUp from "./UserSignUp";
import Dashboard from "../Dashboard/Dashboard";

const defaultUser = [
  {
    userFullName: "mob",
    userName: "mob123",
    userEmail: "mob@gmail.com",
    userZipCode: "123",
    userDesignation: "student",
    userPasswd: "12345",
  },
];
export default function Website() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [users, setUser] = useState(defaultUser);
  const [userlogin, setLogin] = useState(null);

  function handleAddUser(user) {
    setUser((current) => [user, ...current]);
    alert("User Add Successfully Please Login To Confirm");
  }

  function handleLogin(email, passwd) {
    const user = users.filter(
      (value) => value.userEmail === email && value.userPasswd === passwd
    );
    console.log("user login", user);
    if (user.length === 0) {
      alert("Wrong Email Id and Password");
    } else {
      setLogin(user);
    }
  }
  console.log(users);

  function handleOpenSignIn() {
    setIsSignInOpen((is) => !is);
    setLogin(null);
  }
  return (
    <>
      {userlogin ? (
        <Dashboard user={userlogin[0]} onOpenSignIn={handleOpenSignIn} />
      ) : isSignInOpen ? (
        <UserSignUp
          onOpenSignIn={handleOpenSignIn}
          onHandleAddUser={handleAddUser}
          onUserLogin={handleLogin}
        />
      ) : (
        <>
          <Header>
            <NavBar onOpenSignIn={handleOpenSignIn} />
            <Hero />
          </Header>
          <main>
            <Mission />
            <HowItWorks />
            <Features />
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
