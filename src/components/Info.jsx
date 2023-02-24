import React from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../features/atom";

const Info = () => {
  const [username, setUsername] = useRecoilState(userInfo);

  return (
    <div>
      <span>지금 로그인한 유저 : {username}</span>
    </div>
  );
};

export default Info;
