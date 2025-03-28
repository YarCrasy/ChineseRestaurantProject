import { useState } from "react";
import { auth } from "../../services/firebase";
import { signOut, updateEmail, updatePassword } from "firebase/auth";

export const useAccount = () => {
   const [newEmail, setNewEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [updateMessage, setUpdateMessage] = useState("");

   const handleLogout = async () => {
      try {
         await signOut(auth);
         window.location.reload(); // Reload the page after logout
      } catch (error) {
         console.error("Error during logout", error);
      }
   };

   const handleUpdateEmail = async () => {
      if (newEmail.trim()) {
         try {
            await updateEmail(auth.currentUser, newEmail);
            setUpdateMessage("Email updated successfully!");
         } catch (error) {
            console.error("Error updating email", error);
            setUpdateMessage("Failed to update email: " + error.message);
         }
      }
   };

   const handleUpdatePassword = async () => {
      if (newPassword.trim()) {
         try {
            await updatePassword(auth.currentUser, newPassword);
            setUpdateMessage("Password updated successfully!");
         } catch (error) {
            console.error("Error updating password", error);
            setUpdateMessage("Failed to update password: " + error.message);
         }
      }
   };

   return {
      newEmail,
      setNewEmail,
      newPassword,
      setNewPassword,
      updateMessage,
      handleLogout,
      handleUpdateEmail,
      handleUpdatePassword,
   };
};
