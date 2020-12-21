import styled from 'styled-components';

export const PortfolioSection = styled.section`
    padding: 4rem;
`

export const Title = styled.h2`
    text-align: center;
    padding: 3rem;
    font-size: 2rem;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
`