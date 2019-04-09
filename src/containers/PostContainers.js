import React, {Component} from 'react';
import { PostWrapper, Navigator, Post } from '../components';
import * as service from '../services/post';


class PostContainer extends Component {

    constructor(props){
        super();
        //initializes component state
        this.state = {
            postId : 1,
            fetching: false,// tells whether the request is waiting for response or not, (요청의 완료여부)
            post : {
                title: null,
                body : null
            },
            comments : []
        }
    }

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    // -> 비효율적. 첫번째 요청을 기다린다음에 두번쨰 요청을 기다리기 때문
    // fetchPostInfo = async (postId) => {
    //     const post = await service.getPost(postId);
    //     console.log(post);
    //     const comments = await service.getComments(postId);
    //     console.log(comments);
    // }

    fetchPostInfo = async (postId) => {

        this.setState({
           fetching : true //requesting..
        });

        try{
            //wait for two promises
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId)
            ]);

            //Object destructuring Syntax, takes out required values and create references to them
            const {title, body} = info[0].data; //객체 비구조화 할당 문법 -> 필요한 값을 객체에서 꺼내서 그 값을 가지고 레퍼런스를 만들어준다.

            const comments = info[1].data;

            this.setState({
                postId,
                post: {
                    title,
                    body
                },
                comments,
                fetching: false //done! -> 요청이 끝났을 떄 false로 다시 설정해준다.
            });
        }catch(e){
            this.setState({
                fetching:false
            });
               console.log('error occurred', e);
        }

    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT'){
            this.fetchPostInfo(postId+1);
        }else{
            this.fetchPostInfo(postId-1);
        }
    }




    render() {
        const {postId, fetching, post, comments} = this.state; //객체 비구조화 할당 문법을 사용하므로써, this.state.post.title이렇게 해야하는것을 바로 post.title로 할 수 있음.
                                                                //disabled 속성 -> 데이터를 불러오는 중일땐 버튼을 비활성화 하도록 하는것

        return (
            <PostWrapper>
                <Navigator
                    postId={postId}
                    disabled={fetching}
                    onClick={this.handleNavigateClick}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;

//state를 추가하기 위해서 클래스 형식으로 컴포넌트를 선언