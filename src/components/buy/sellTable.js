import React from 'react'
import BuyBondCard from './sellBondCard'
import { map } from 'lodash'
import styled from 'styled-components'


const StyledTableHeader = styled.h2`
  letter-spacing: 1px;
  margin-bottom: 26px;
  border-bottom: 1px solid #1C88C3;
`

const array = [1, 2, 3, 4, 5]

const SellTable = () => {
  return (
    <div>
      <StyledTableHeader>Sell Bonds</StyledTableHeader>
      <div>
        {map(array, bond => <BuyBondCard key={bond} bond={bond} />)}
      </div>
    </div>
  )
}

export default SellTable
