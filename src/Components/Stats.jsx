import React from 'react'
import { Card, Statistic, Row, Col, Icon } from 'antd';

export default function Stats() {
    return(
        <div>
            <Card style={{ width: '100%', textAlign: 'center', height: '120px'}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Transactions" value={1128} prefix={<Icon type="like" />} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Working" value={93} suffix="/ 100" />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}