import { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";

export const useComments = (userId) => {
   const [comments, setComments] = useState([]);
   const [newComment, setNewComment] = useState("");
   const [selectedDish, setSelectedDish] = useState("");
   const [editingComment, setEditingComment] = useState(null);
   const [editedCommentValue, setEditedCommentValue] = useState("");

   const dishes = ["Kung Pao Chicken", "Sweet and Sour Pork", "Spring Rolls", "Fried Rice"];

   useEffect(() => {
      if (userId) {
         const db = getDatabase();
         const commentsRef = ref(db, `/comments/${userId}`);
         onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            const commentsList = data
               ? Object.entries(data).map(([key, value]) => ({ key, ...value }))
               : [];
            setComments(commentsList);
         });
      }
   }, [userId]);

   const handleAddComment = () => {
      if (newComment.trim() && selectedDish && userId) {
         const db = getDatabase();
         const commentsRef = ref(db, `/comments/${userId}`);
         const newCommentRef = push(commentsRef);
         set(newCommentRef, { text: newComment, dish: selectedDish })
            .then(() => {
               setNewComment("");
               setSelectedDish("");
            })
            .catch((error) => {
               console.error("Error saving comment:", error);
            });
      }
   };

   const handleEditComment = (comment) => {
      setEditingComment(comment.key);
      setEditedCommentValue(comment.text);
   };

   const handleUpdateComment = () => {
      if (editingComment && editedCommentValue.trim() && userId) {
         const db = getDatabase();
         const commentRef = ref(db, `/comments/${userId}/${editingComment}`);
         set(commentRef, { text: editedCommentValue, dish: comments.find(c => c.key === editingComment).dish })
            .then(() => {
               setEditingComment(null);
               setEditedCommentValue("");
            })
            .catch((error) => {
               console.error("Error updating comment:", error);
            });
      }
   };

   const handleDeleteComment = (commentKey) => {
      if (userId) {
         const db = getDatabase();
         const commentRef = ref(db, `/comments/${userId}/${commentKey}`);
         remove(commentRef)
            .catch((error) => {
               console.error("Error deleting comment:", error);
            });
      }
   };

   return {
      comments,
      newComment,
      setNewComment,
      selectedDish,
      setSelectedDish,
      editingComment,
      editedCommentValue,
      setEditedCommentValue,
      dishes,
      handleAddComment,
      handleEditComment,
      handleUpdateComment,
      handleDeleteComment,
   };
};
