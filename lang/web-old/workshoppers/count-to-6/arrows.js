var input  = process.argv.slice(2)
	, result = inputs.map(s => s[0])
								.reduce((soFar, s) => soFar + s)

console.log(`[$inputs] becomes "$[result]"`)

