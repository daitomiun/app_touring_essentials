export default function getObjectEntries(object) {
  let str = [];
  let keys = [];
  for (const [key, value] of Object.entries(object)) {
    str.push(value);
    keys.push(key);
  }
  return str.join(", ");
}
