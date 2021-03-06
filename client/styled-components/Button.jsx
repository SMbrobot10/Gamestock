import React from 'react'
import styled from 'styled-components';

export const ButtonComponent = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "#2D1C7B" : "white"};
color: ${props => props.primary ? "white" : "#2D1C7B"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #2D1C7B;
border-radius: 3px;
`;

// export default function Button() {

//   return (
//     <div>
//     <ButtonComponent>Normal</ButtonComponent>
//     <ButtonComponent primary>Primary</ButtonComponent>
//     </div>
//   )
// }
