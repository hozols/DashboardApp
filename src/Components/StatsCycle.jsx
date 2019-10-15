import React from 'react'
import { Carousel, Image } from "grommet";

import Stats from "./Stats";
import PieChartCard from "./PieChartCard";
import LineChart from "./RadarChart";

export default function StatsCycle() {
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    return(
        <div>
            <Carousel play={5000}
            controls="arrows">
                <Stats/>
                <PieChartCard/>
            </Carousel>
        </div>
    )

}