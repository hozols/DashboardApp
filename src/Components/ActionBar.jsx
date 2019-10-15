import React from 'react';
import { Button, Icon } from 'antd';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const ButtonGroup = Button.Group;

export default function ActionBar() {
    return (
        <div style={{paddingBottom: '20px', textAlign: 'right'}}>
            <ButtonGroup>
                <Button type="primary">Start</Button>
                <Button type="danger">Stop</Button>
                <Button>Restart</Button>
            </ButtonGroup>
        </div>
    )

}