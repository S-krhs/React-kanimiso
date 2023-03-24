import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
})

export const memoAtom = atom({
  key: "Memopad",
  default: [{
    id: 1,
    thumbimg: "099.png",
    title: "First Entry",
    text: "最初のエントリーだよ。This is a first entry.",
  }],
  effects_UNSTABLE: [persistAtom],
});

export const draftAtom = atom({
  key: "MemoDraft",
  default: {
    thumbimg: "099.png",
    title: "タイトル",
    text: "ここに本文を入力",
  },
  effects_UNSTABLE: [persistAtom],
});

export const subAtom = atom({
  key: "sub",
  default: "no-contents",
});
