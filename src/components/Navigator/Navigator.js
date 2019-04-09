// 포스트를 앞 뒤로 넘기는 Navigate컴포넌트

import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigator.css';

const Navigator = () => (
    <div className="Navigate">
        <Button
            color="teal"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
        />
        <div className="Navigate-page-num">
            1
        </div>
        <Button
            color="teal"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
        />
    </div>
);

export default Navigator;