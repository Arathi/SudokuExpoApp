import { atom } from "recoil";

export const majorBorderWidthState = atom({
  key: 'majorBorderWidthState',
  default: 3,
});

export const minorBorderWidthState = atom({
  key: 'minorBorderWidthState',
  default: 1,
});

export const majorBorderColorState = atom({
  key: 'majorBorderColorState',
  default: '#344861',
});

export const minorBorderColorState = atom({
  key: 'minorBorderColorState',
  default: '#BFC6D4',
});
