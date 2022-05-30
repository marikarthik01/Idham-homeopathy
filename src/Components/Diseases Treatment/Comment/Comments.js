import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import './Comment.css';
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";

const Comments = ({ commentsUrl, currentUserId , initialText = "",}) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const [text, setText] = useState(initialText);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <div class="ttm-blog-classic-box-comment">
        <div id="comments" class="comments-area">
          <div class="comment-respond">
            <h3 class="comment-reply-title">Leave a Reply</h3>
            <form action="#" method="post" id="commentform" class="comment-form">
              <p class="comment-notes">Your email address will not be published. </p>
              <p class="comment-form-comment">
                <textarea id="comment" className="comment-form-textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)} placeholder="Comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
              </p>
              <p class="comment-form-author">
                <input id="author" placeholder="Name (required)" name="author" type="text" value="" size="30" aria-required="true" />
              </p>
              <p class="comment-form-email">
                <input id="email" placeholder="Email (required)" name="email" type="text" value="" size="30" aria-required="true" />
              </p>
              <p class="comment-form-url">
                <input id="url" placeholder="Website" name="url" type="text" value="" size="30" />
              </p>
              <p class="form-submit">
                <input name="submit" type="submit" id="submit" class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-round ttm-btn-style-fill ttm-btn-color-skincolor margin_top10" value="Post Comment" />
              </p>
            </form>
          </div>
        </div>
      </div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">

        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
