const foo = str => str.replace (/(\_\w)/g, a => a[1].toUpperCase())
export default foo
