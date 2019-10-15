import React from 'react'
import { Card } from 'antd';

export default function TerminalOutput() {
    return(
    <div>
        <Card title="Terminal output" extra={<a href="#">More</a>} style={{ width: '100%', textAlign: 'left'}}>
            <p>03/22 08:51:01 INFO   :...locate_configFile: Specified configuration file: /u/user10/rsvpd1.conf</p>
            <p>03/22 08:51:01 INFO   :..settcpimage: Get TCP images rc - EDC8112I Operation not supported on socket.</p>
            <p>03/22 08:51:06 TRACE  :...read_physical_netif: Home list entries returned = 7</p>
            <p>03/22 08:51:06 INFO   :...read_physical_netif: index #2, interface LINK11 has address 9.67.100.1, ifidx 2
            </p>
        </Card>
    </div>
    )
}