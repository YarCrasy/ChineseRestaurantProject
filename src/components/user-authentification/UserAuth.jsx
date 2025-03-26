import "./UserAuth.css";
import { useState, useEffect } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

function UserAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleAuth = async () => {
        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            console.error("Error during authentication", error);
            setError(error.message);
        }
    };

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error during Google authentication", error);
            setError(error.message);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error during sign out", error);
            setError(error.message);
        }
    };

    if (user) {
        return (
            <div className="user-auth">
                <h2>Welcome, {user.email}</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        );
    }

    return (
        <div className="user-auth">
            <h2>{isRegister ? "Register" : "Login"}</h2>
            {error && <p className="error-message">{error}</p>}
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