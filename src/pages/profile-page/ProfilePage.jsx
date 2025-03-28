import "./ProfilePage.css";
import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useComments } from "./CommentsLogic";
import { useAccount } from "./AccountLogic";
import defaultUserIcon from "/imgs/icon-imgs/user-icon.svg";

function ProfilePage() {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return () => unsubscribe();
   }, []);

   const {
      comments,
      newComment,
      setNewComment,
      selectedDish,
      setSelectedDish,
      editingComment,
      editedCommentValue,
      setEditedCommentValue,
      setEditingComment,
      dishes,
      handleAddComment,
      handleEditComment,
      handleUpdateComment,
      handleDeleteComment,
   } = useComments(user?.uid);

   const {
      newEmail,
      setNewEmail,
      newPassword,
      setNewPassword,
      updateMessage,
      handleLogout,
      handleUpdateEmail,
      handleUpdatePassword,
   } = useAccount();

   if (!user) {
      return (
         <div>
            <h1>Profile Page</h1>
            <p>You are not logged in. Please log in to view your profile.</p>
         </div>
      );
   }

   return (
      <main>
         <h1>Profile Page</h1>
         <p>Welcome, {user.displayName || user.email}!</p>
         <p>Email: {user.email}</p>
         <img src={user.photoURL || defaultUserIcon} alt="User Avatar" />

         <button onClick={handleLogout}>Logout</button>

         <div>
            <h2>Update Email</h2>
            <input
               type="email"
               value={newEmail}
               onChange={(e) => setNewEmail(e.target.value)}
               placeholder="New Email"
            />
            <button onClick={handleUpdateEmail}>Update Email</button>

            <h2>Update Password</h2>
            <input
               type="password"
               value={newPassword}
               onChange={(e) => setNewPassword(e.target.value)}
               placeholder="New Password"
            />
            <button onClick={handleUpdatePassword}>Update Password</button>

            {updateMessage && <p>{updateMessage}</p>}
         </div>

         <div>
            <h2>Comments</h2>
            <div className="comments-container">
               {comments.map((comment) => (
                  <div key={comment.key} className="comment-item">
                     {editingComment === comment.key ? (
                        <>
                           <input
                              type="text"
                              value={editedCommentValue}
                              onChange={(e) => setEditedCommentValue(e.target.value)}
                              placeholder="Edit your comment"
                           />
                           <button onClick={handleUpdateComment}>Save</button>
                           <button onClick={() => setEditingComment(null)}>Cancel</button>
                        </>
                     ) : (
                        <>
                           <span>{comment.text} (Dish: {comment.dish})</span>
                           <button onClick={() => handleEditComment(comment)}>Edit</button>
                           <button onClick={() => handleDeleteComment(comment.key)}>Delete</button>
                        </>
                     )}
                  </div>
               ))}
            </div>
            <textarea
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
               placeholder="Write a comment..."
               rows="4"
            />
            <select
               value={selectedDish}
               onChange={(e) => setSelectedDish(e.target.value)}
            >
               <option value="">Select a dish</option>
               {dishes.map((dish, index) => (
                  <option key={index} value={dish}>
                     {dish}
                  </option>
               ))}
            </select>
            <button onClick={handleAddComment}>Add Comment</button>
         </div>
      </main>
   );
}

export default ProfilePage;