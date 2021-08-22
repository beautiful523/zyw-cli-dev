#!/usr/bin/env node

const importLocal = require("import-local")

if (importLocal(__filename)) {
    require("npmlog").info('cli', '本地版本')
} else {
    require("npmlog").info('cli', '非本地版本')
}