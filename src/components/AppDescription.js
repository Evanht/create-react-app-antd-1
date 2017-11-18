
import React from 'react';

import styled from 'styled-components';

const Description = styled.div `
  margin-left: 14%;
  background-color: white;
  min-height: 50vh; 
  width: 35%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
`

const TextContainer = styled.div `
  margin: 15px;
`

const SummaryList = styled.ul `
  margin-left: 30px;
  font-size: 25px;
  list-style-type: circle;
`

const Heading = styled.h1 `
  font-size: 40px;
`


class AppDescription extends React.Component {
  render() {
    return (
        <Description>
          <TextContainer>
            <Heading>
              We are Bondbase
            </Heading>
            <SummaryList>
              <li>Down-to-earth trading</li>
              <li>Low fees</li>
              <li>Exit at any time</li>
            </SummaryList>
          </TextContainer>
        </Description>
      );
   }
}

export default AppDescription;