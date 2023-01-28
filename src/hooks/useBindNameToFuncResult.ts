export default function useBindNameToFuncResult(
  bindFunction: Function
): Function {
  const func = (bindName: string) => (value: any) =>
    bindFunction({ [bindName]: value });

  return func;
}
