export default function (item: string, data: any) {
  localStorage.setItem(item, JSON.stringify(data));
}
