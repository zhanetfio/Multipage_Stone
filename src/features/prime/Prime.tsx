import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";


export const Prime = () => {
    return (
        <PrimeBox>
            Prime
        </PrimeBox>
    );
};

const PrimeBox=styled.div`
  background-color: ${myTheme.colors.color3};
  
    `