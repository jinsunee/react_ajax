import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../components';


class PostContainer extends Component {
    render() {
        return (
            <PostWrapper>
                <Navigator />
                <Post />
            </PostWrapper>
        );
    }
}

export default PostContainer;

//state를 추가하기 위해서 클래스 형식으로 컴포넌트를 선언