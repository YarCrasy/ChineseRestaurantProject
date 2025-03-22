import "./UserAuth.css";
import { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function UserAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);

    const handleAuth = async () => {
        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            console.error("Error during authentication", error);
        }
    };

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error during Google authentication", error);
        }
    };

    return (
        <div className="user-auth">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleAuth}>
                {isRegister ? "Register" : "Login"}
            </button>
            <button onClick={handleGoogleAuth}>
                {isRegister ? "Register with Google" : "Login with Google"}
            </button>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Switch to Login" : "Switch to Register"}
            </button>
        </div>
    );
}

export default UserAuth;