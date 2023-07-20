import React, { useState }from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postId }) => {
    const [comment, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            comment
        });
        setContent('');
    }
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={comment} 
                onChange={e => setContent(e.target.value)}
                className="form-control" />
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
    </div>;
}