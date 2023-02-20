import { atom, selector } from "recoil";

// 뿌리 상태값
export const fontSizeState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 14, // default value (aka initial value)
});


// 여기서 default 라는 값으로 항상 써야 되는 걸까?


export const fontSizeLabelState = selector({
  key: 'fontSizeLabelState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`
  },
});