export function joinClassNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(' ');
}
