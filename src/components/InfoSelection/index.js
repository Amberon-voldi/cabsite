import React from 'react'
import { Button } from '../ButtonElements'
import {Heading, SubTitle, BtnWrap, ImgWrap, Img, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, } from '../InfoSelection/InfoElements'

function InfoSelection({id, lightBg, topLine, imgStart, lightText, description, darkText, img,headline,buttonLabel, alt, primary}) {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to='home' primary ={primary} >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSelection
