import { range } from "utils";

export function generateKeyboardMap() {
  const keyMap = new Map<string, string | undefined>();
  range(65, 91).forEach((charCode) =>
    keyMap.set(String.fromCharCode(charCode), undefined)
  );
  return keyMap;
}
