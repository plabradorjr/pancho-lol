import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Container>
            <p>Home</p>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    height: 78px;
    left: 0%;
    right: 0%;
    top: 0px;

    background: #101010;

    p {
        position: absolute;
        width: 39px;
        height: 24px;
        left: calc(50% - 39px/2 - 458.5px);  
        /* display: flex; */
        /* align-items: center; */
        /* text-align: center; */

    }
`;

export default Nav
