import React from 'react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
const data = [
      {name: '01/01/17', $: 1000, pv: 2400, amt: 1000},
      {name: '06/15/17', $: 1070, pv: 1398, amt: 1070},
      {name: '01/01/18', $: 1140, pv: 9800, amt: 1140},
      {name: '06/15/18', $: 1210, pv: 3908, amt: 1210},
      {name: '01/01/19', $: 1280, pv: 4800, amt: 1280},
      {name: '06/15/19', $: 1350, pv: 3800, amt: 1350},
      {name: '01/01/20', $: 1420, pv: 4300, amt: 1420},
];


class Graph extends React.Component {

  render() {
    return (
      <div>
        <AreaChart width={500} height={400} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='$' stroke='#136ACD' fill='#1C88C3' />
        </AreaChart>
      </div>
    );
   }
}

export default Graph;
