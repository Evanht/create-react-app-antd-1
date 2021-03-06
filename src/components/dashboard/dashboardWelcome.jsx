import React, { Component } from 'react'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const StyledWelcomeContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(28,136,195, 0.2);
  border-radius: 2px;
`

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class TinyAreaChart extends Component {
  render () {
  	return (
    	<AreaChart width={300} height={60} data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    );
  }
}

const WelcomeMessage = () => {
  return (
    <StyledWelcomeContainer>
      <h1>Welcome to your dashboard</h1>
      <TinyAreaChart />
    </StyledWelcomeContainer>
  )
}

export default WelcomeMessage
