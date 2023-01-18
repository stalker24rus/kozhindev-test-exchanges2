export default function (item: string): any {
  return JSON.parse(localStorage.getItem(item));
}
