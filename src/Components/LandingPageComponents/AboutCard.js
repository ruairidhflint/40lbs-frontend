import React from 'react';
import styled from 'styled-components';

function AboutCard() {
    return (
        <StyledCard></StyledCard>
    )
}

const StyledCard = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid red;
`

export default AboutCard;