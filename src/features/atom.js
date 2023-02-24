import { atom, selector } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: false,
});

export const textState = atom({
  key: "textState",
  default: "기본값",
});

export const textSelector = selector({
  key: "textSelector",
  get: ({ get }) => {
    const textValue = get(textState);
    return `제가 가져온 값은 : ${textValue} 입니다`;
  },
  set: ({ set }, newValue) => {
    const newTextValue = newValue;
    set(textState, newTextValue);
  },
});
