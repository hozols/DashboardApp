import React from 'react'
import { Card, Statistic, Row, Col, Icon } from 'antd';
import { Meter } from 'grommet';


export default function Stats() {
    return(
        <div>
            <Card style={{ width: '100%', textAlign: 'center', height: '120px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        Riga
                        <Meter
                            type='circle'
                            thickness='xlarge'
                            values={[
                                {
                                    label: 'First',
                                    value: 10,
                                    color: '#FF5154'
                                },
                                {
                                    label: 'Second',
                                    value: 90,
                                    color: '#9EB25D'

                                },
                            ]}
                            style={{height: '70px'}}
                        />
                    </Col>
                    <Col span={8}>
                        Salaspils
                        <Meter
                            type='circle'
                            thickness='xlarge'
                            values={[
                                {
                                    label: 'First',
                                    value: 50,
                                    color: '#F25757'
                                },
                                {
                                    label: 'Second',
                                    value: 40,
                                    color: '#9EB25D'

                                },
                            ]}
                            style={{height: '70px'}}
                        />
                    </Col>
                    <Col span={8}>
                        Jurmala
                        <Meter
                            type='circle'
                            thickness='xlarge'
                            values={[
                                {
                                    label: 'First',
                                    value: 50,
                                    color: '#F25757'
                                },
                                {
                                    label: 'Second',
                                    value: 40,
                                    color: '#9EB25D'

                                },
                            ]}
                            style={{height: '70px'}}
                        />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}