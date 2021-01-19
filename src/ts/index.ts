// import {loadWasmModule} from './loadWasmModule'
// import 'assemblyscript/std/portable'

import {print} from 'aswebglue'
print("hello aswebglue");

main()

function main() {
	runGlas({mode: 'untouched'})
	// runGlas({mode: 'optimized'})
}

// type GlasModule = {
// 	main(): void
// }

async function runGlas(options: RunOptions = {}) {

	console.log(`runGlas -> ('${options.mode || 'optimized'}')`)

	// const module = `../as/${options.mode || 'optimized'}.wasm`

	// console.log(module);

	// const start = performance.now()

	// this is currently broken, and we need a better way to test this out.
	// BROKEN
	// const {
	// 	exports: {main, __getString},
	// } = await loadWasmModule<GlasModule>(module, {
	// 	env: {
	// 		// this is called by `assert()`ions in the AssemblyScript std libs.
	// 		// Useful for debugging.
	// 		abort(msg: number, file: number, line: number, column: number) {
	// 			console.log(
	// 				`msg: ${(msg && __getString(msg)) || msg}\n`,
	// 				`file: ${(file && __getString(file)) || file}\n`,
	// 				`line: ${line}\n`,
	// 				`col: ${column}\n`
	// 			)
	// 		},
	// 	},
	// 	console: {
	// 		log(msg: number) {
	// 			console.log(`msg: ${(msg && __getString(msg)) || msg}`)
	// 		},
	// 	},
	// })
	// const end = performance.now()
	// console.log(options.mode + ' module load time:', end - start)

	// const start2 = performance.now()
	// main()
	// const end2 = performance.now()
	// console.log(options.mode + ' run time:', end2 - start2)
}

type RunOptions = {
	mode?: 'optimized' | 'untouched'
}
