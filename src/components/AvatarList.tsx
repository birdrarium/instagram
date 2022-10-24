import { Component } from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;

`


function AvatarList() {
    return (
        <Container>
          <Avatar name="myAccount"/>
          <Avatar name="profile2" photo="https://cdn.pixabay.com/photo/2018/04/14/20/38/cherry-blossom-3320018_960_720.jpg"/>
          <Avatar name="profile3" photo="https://cdn.pixabay.com/photo/2020/03/12/11/21/cherry-blossom-4924795_960_720.jpg"/>
          <Avatar name="profile4"/>
          <Avatar name="profile5"/>
        </Container>
    );
  }
  
  export default AvatarList;
  