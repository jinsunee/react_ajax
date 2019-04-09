// 포스트를 앞 뒤로 넘기는 Navigate컴포넌트

import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigator.css';

const Navigator = ({onClick, postId, disabled}) => (
    <div className="Navigate">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}
        />
        <div className="Navigate-page-num">
            {postId}
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
            onClick={
                () => onClick('NEXT')
            }
            disabled={disabled}
        />
    </div>
);

export default Navigator;