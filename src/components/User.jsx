import React, { useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { userInfo, textSelector, textState } from "../features/atom";

const User = () => {
  // const setUserInfo = useSetRecoilState(userInfo);
  const [textValue, setTextValue] = useRecoilState(textSelector);
  // setTextValue("새로운 값");
  // console.log(textValue);
  setTextValue("새로운값...!!");

  // const setTextAtom = useSetRecoilState(textState);
  const [username, setUsername] = useRecoilState(userInfo);

  const onClick = () => {
    setUsername("홍길동");

    console.log(textValue);
  };

  return (
    <div>
      <h2>USER</h2>
      <button onClick={onClick}>로그인하기</button>
    </div>
  );
};

export default User;
