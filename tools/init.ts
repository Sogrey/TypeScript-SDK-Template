/**
 * This script runs automatically after your first npm-install.
 */
const { mv, rm, which, exec } = require("shelljs")
const path = require("path")
const { readFileSync, writeFileSync } = require("fs")
const { fork } = require("child_process")
const colors = require("colors")

/**需要移除的目录 */
const rmDirs = [
    ".git"
]/**需要移除的文件 */
const rmFiles = [
    ".all-contributorsrc",
    ".gitattributes",
    "tools/init.ts"
]/**需要合并的文件 */
const modifyFiles = [
    "LICENSE",
    "package.json",
    "rollup.config.ts",
    "test/library.test.ts",
    "tools/gh-pages-publish.ts"
]/**需要重命名的文件 */
const renameFiles = [
    ["src/library.ts", "src/--libraryname--.ts"],
    ["test/library.test.ts", "test/--libraryname--.test.ts"]
]

console.log('[node TS] 刚执行了 npm install 后自启动执行...');

let username = exec("git config user.name").stdout.trim()
let usermail = exec("git config user.email").stdout.trim()

console.log(username, usermail);

// Remove post-install command
let jsonPackage = path.resolve(__dirname, "..", "package.json")
const pkg = JSON.parse(readFileSync(jsonPackage) as any)

console.log(jsonPackage);
console.log(pkg);

// Note: Add items to remove from the package file here
// delete pkg.scripts.postinstall

// writeFileSync(jsonPackage, JSON.stringify(pkg, null, 2))
// console.log(colors.green("Postinstall script has been removed"))

// // Initialize Husky
// fork(
//     path.resolve(__dirname, "..", "node_modules", "husky", "bin", "install"), {
//         silent: true
//     }
// );
// console.log(colors.green("Git hooks set up"))

// console.log("\n")
