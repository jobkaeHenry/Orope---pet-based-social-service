import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png"
import back from "../img/back.png"

const HeaderLine = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--line-gray);
`;
const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 470px;
    min-width: 330px;
    padding: 20px;
  }
`;
const CenterWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 20px 13%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 470px;
    min-width: 330px;
    padding: 20px;
  }
`;
const IconWrapper = styled.div`
cursor: pointer;
  width: 70px;
`;
const IconImg = styled.img`
  height: 32px;
  object-fit: cover;
  float: right;
`;

// 타입에는 헤더갯수에 따라 1,2,3 이 있음 / name 은 상단에 표시되는이름 / callback은 우측 아이콘 클릭시 동작
const TopHeader = ({ type, name, callBack, callBackType="img" ,callBackImg="plus",callBackText="", URL="#" }) => {
  
  const navigate = useNavigate()
  const goback=()=>{navigate(-1)}
  // 3단 헤더
  
  if (type === "3") {
    return (
      <HeaderLine>
        <HeaderWrapper>

            <IconImg
              src={back}
              alt="로고"
              className="header_logo"
              onClick={goback}
            />

          <span className="h3 xbold">{name}</span>

          <Link to={URL}>
          <IconWrapper onClick={callBack}>
            {callBackType==="text"?<IconImg as="span">{callBackText}</IconImg>:<IconImg src={`../../img/${callBackImg}.png`} alt="새 글쓰기" />}
          </IconWrapper>
          </Link>
          
        </HeaderWrapper>
      </HeaderLine>
    );

      // 2단 헤더
  } else if (type === "2") {
    return (
      <HeaderLine>
        <HeaderWrapper>

            <IconImg
              src={back}
              alt="로고"
              className="header_logo"
              onClick={goback}
            />

          <span className="h3 xbold">{name}</span>
          <IconWrapper></IconWrapper>
        </HeaderWrapper>
      </HeaderLine>
    );

      // 1단 헤더
  } else if (type === "1") {
    return (
      <HeaderLine>
        <CenterWrapper>
          <Link to="/">
            <IconImg
              src={logo}
              alt="로고"
              className="header_logo"
            />
          </Link>
        </CenterWrapper>
      </HeaderLine>
    );
  }
};

export default TopHeader;
