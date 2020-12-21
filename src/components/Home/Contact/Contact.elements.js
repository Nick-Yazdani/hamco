import styled from 'styled-components';

export const Form = styled.form`
`
export const Label = styled.label`
`
export const Input = styled.input`
    width: 90%;
    margin-right: 1rem;
    display: inline-block;
    padding: 1rem;
    background-color: #f8f7f7;
    outline: none;
    border: 1px solid #bfc0c0;
    color: #000;
    border-radius: .1rem;
    margin-bottom: 1.4rem;
    font-family: 'Montserrat', sans-serif;

    &::placeholder {
        font-family: 'Montserrat', sans-serif;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
`
export const MessageText = styled.textarea`
    width: 95%;
    background-color: #f8f7f7;
    border: 1px solid #bfc0c0;
    color: #000;
    resize: none;
    height: 12rem;
    padding: 1rem;
    border-radius: .1rem;
    font-family: 'Montserrat', sans-serif;
    
    &::placeholder {
        font-family: 'Montserrat', sans-serif;
    }
`
export const Row = styled.div`
    display: flex;
    width: 100%;
`
export const Col = styled.div`
    width: 50%;
`
export const Title = styled.h2`
    margin-bottom: 1.3rem;
`
export const Highlight = styled.span`
    color: #ef8354;
`
export const Button = styled.button`
    outline: none;
    border: none;
    background-color: #ef8354;
    padding: .9rem 3.5rem;
    border-radius: .1rem;
    text-transform: uppercase;
    color: #fff;
    font-size: .8rem;
    margin: 1.5rem 0;
    border: 1px solid #ef8354;
    transition: all .3s;
    cursor: pointer;

    &:hover {
        border: 1px solid #ef8354;
        background-color: transparent;
        color: #ef8354;
    }
`