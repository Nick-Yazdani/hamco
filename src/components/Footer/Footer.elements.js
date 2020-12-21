import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

export const Container = styled.footer`
    background-color: #2d3142;
    display: flex;
    color: #fff;
`

export const About = styled.div`
    width: 40%;
    padding: 3.5rem;
`

export const Links = styled.div`
    padding: 3.5rem;
    width: 25%;
`

export const Contact = styled.div`
    padding: 3.5rem;
    width: 35%;
    display: flex;
    flex-direction: column;
`

export const ContactEntry = styled.span`
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
   
`

export const ContactContainer = styled.div`
 &:not(:last-child) {
        margin-bottom: 1rem;
    }
`

export const Heading = styled.h5`
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
`

export const LinkList = styled.ul`
list-style: none;
`

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: .7rem;
    }
    font-size: .8rem;
`

export const Paragraph = styled.p`
    font-size: .8rem;
`

export const ListLink = styled((props) => <Link {...props} />)`
    text-decoration: none;
    color: #fff;
    transition: all .3s;

    &:hover {
        color: #ef8354;
    }
`;