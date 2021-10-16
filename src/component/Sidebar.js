import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt=""/>
                <h3>
                    Diah <span>Codes</span>
                </h3>
            </LogoWrapper>

            <Form>
                <h3>Sign Up</h3>
                <Input placeholder="Full name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
            </Form>
        </Container>
    )
}
const Form = styled.form``;

const LogoWrapper = styled.div`
    img {
        height: 6 rem;
    }
    h3 {
        text-align: center;
        color: #ff8d8d;
        font-size: 22px;
    }
    span {
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;
`;

export default Sidebar
