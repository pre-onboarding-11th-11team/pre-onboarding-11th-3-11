import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Error() {
  const navigate = useNavigate();

  return (
    <ErrorWarpper>
      <h1>Error 🚫</h1>
      <ErrorContent>
        알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.
      </ErrorContent>
      <ErrorButton onClick={() => navigate('/')}>
        메인 페이지로 돌아가기
      </ErrorButton>
      <ErrorImage src="/error.gif" alt="error" />
    </ErrorWarpper>
  );
}

export default Error;

const ErrorWarpper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  text-align: center;
`;

const ErrorContent = styled.div`
  margin-top: 14px;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  white-space: pre-line;
`;

const ErrorButton = styled.button`
  display: block;
  color: var(--blue-color);
  text-decoration: none;
  text-align: center;
  margin: 10px auto 0px;
  padding: 0px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ErrorImage = styled.img`
  margin-block: 32px;
  width: 240px;
`;
