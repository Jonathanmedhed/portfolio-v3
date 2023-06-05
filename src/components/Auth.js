import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <input
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <input
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
