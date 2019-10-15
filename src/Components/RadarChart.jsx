import React from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries
} from 'react-vis';

export default function Example(props) {

    return (
        <XYPlot
            width={300}
            height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries
                data={[
                    {x: 1, y: 4},
                    {x: 5, y: 2},
                    {x: 15, y: 6}
                ]}/>
        </XYPlot>
    );
}