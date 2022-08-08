import styled from "styled-components";

export const InfoContainer= styled.div`
margin-bottom: 5rem;

 color: #fff;
 background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const InfoWrapper = styled.div`

 display: grid;
 z-index: 1;
 height: ${({isbutton}) => (isbutton ? '300px' : '500px')};
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
 justify-content: center;
 @media screen and (max-width: 768px) {
    height: 760px;
}
`;

export const InfoRow = styled.div`
 display: grid;
 align-items: center;
 grid-auto-columns: minmax(auto, 1fr);
 grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

 @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

 }

`;

export const Column1 = styled.div`
 margin-bottom:15px;
 grid-area: col1;
 padding: 0 15px;
`;

export const Column2 = styled.div`
 margin-bottom:15px;
 grid-area: col2;
 padding: 0 15px;
`;

export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top:0;
 padding-bottom: 60px;
`;

export const TopLine = styled.p`
 color: #FFAA26;
 line-height: 16px;
 font-size: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom:16px;


`;

export const Heading = styled.h1`

 margin-bottom: 24px;
 line-height: 1.1;
 font-size: 48px;
 font-weight: 600;
 color: ${({lightText})=>(lightText ? '#f7f8fa' :'#010606')};

 @media screen and (max-width: 480px) {
    font-size: 32px;

 }
 

`;

export const SubTitle = styled.p`

 max-width: 440px;
 margin-bottom: 35px;
 line-height: 24px;
 font-size: 18px;
 color: ${({darkText})=>(darkText ? '#010606' :'#fff')};


`;

export const BtnWrap = styled.div`
 display: flex;
 justify-content: flex-start;

`;


export const ImgWrap = styled.div`
 max-width: 555px;
 height: 100%;
 
`;


export const Img = styled.img`
 width: 100%;
 margin: 0 0 10px 0;
 padding-right: 0;
 color: black;
 background: black;
`;