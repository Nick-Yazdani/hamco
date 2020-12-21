import styled from 'styled-components';

export const ServicesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  padding: 1rem;
`

export const Paragraph = styled.p`
text-align: center;
width: 75%;
padding: 1rem;
line-height: 1.7rem;
`

export const Row = styled.div`
    display: flex;
    padding: 1rem;
`
export const SubHeading = styled.h5`
margin-bottom: 1rem;
`

export const SubParagraph = styled.p`
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 3fr 1fr 1fr 3fr;
`
export const SubContainer = styled.div`
    padding: 1rem;
    ${props => {
        if (props.right) {
            return `text-align: right;`
        }
        else if (props.left) {
            return `text-align: left;`
        }
    }}
`

export const DirtyCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`