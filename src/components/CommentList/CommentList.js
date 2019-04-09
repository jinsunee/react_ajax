import React from 'react';
import {Comment} from '../';

import './CommentList.css';

const CommentList = ({comments}) => {
    //전달받은 배열 comments 배열을 컴포넌트 배열로 map해준다.
    const commentList = comments.map(
        (comment, index)=>(
            /*<Comment name={comment.name}
                     body={comment.body}
                     key={index}
            />*/
            <Comment name={comment.email.split('@')[0]}
                     body={comment.body}
                     key={index}
            />
        )
    );

    return (
        <ul className="CommentList">
            {commentList}
        </ul>
    );
};


export default CommentList;