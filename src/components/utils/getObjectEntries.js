export default function getObjectEntries(object) {
  let str = [];
  for (const [key, value] of Object.entries(object)) {
    str.push(value);
  }
  return str.join(", ");
}
