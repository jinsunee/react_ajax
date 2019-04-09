import React from 'react';
import './PostWrapper.css';

const PostWrapper = ({children}) => {
    return (
        <div className="PostWrapper">
            {children}
        </div>
    );
}

export default PostWrapper;

//함수의 파라미터로는 children을 받는다. 이 값은, 클래스 형태로 할 때의 this.props.children과 동일하다.
