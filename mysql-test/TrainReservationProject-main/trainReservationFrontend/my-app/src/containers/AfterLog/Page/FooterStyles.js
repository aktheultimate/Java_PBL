import styled from 'styled-components'; 

export const Box = styled.div` 
padding-top: 80px; 
padding-bottom:40px;
background: #060b26; 
position: relative; 
bottom: 0; 
width: 100%; 


@media (max-width: 1000px) { 
	padding: 70px 30px; 
} 
`; 

export const Wrapper = styled.div`
height: auto;
margin: 0 auto -80px; /* footer height + space */
min-height: 100%;
padding: 0 0 80px; /* footer height + space */
box-sizing: border-box;
overflow: auto;
`;


export const Container = styled.div` 
	display: flex; 
	flex-direction: column; 
	justify-content: center; 
	max-width: 1000px; 
	margin: 0 auto; 
	/* background: red; */
` 

export const Column = styled.div` 
display: flex; 
flex-direction: column; 
text-align: left; 
margin-left: 60px; 
`; 

export const Row = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fill, 
						minmax(185px, 5fr)); 
grid-gap: 40px; 

} 
`; 

export const FooterLink = styled.a` 
color: #fff; 
margin-bottom: 20px; 
font-size: 18px; 
text-decoration: none; 

&:hover { 
	color: green; 
	transition: 200ms ease-in; 
} 
`; 

export const Heading = styled.p` 
font-size: 24px; 
color: #fff; 
margin-bottom: 0px; 
font-weight: bold; 
`; 
