const path = require('path')
const fs = require('fs')

module.exports = {
    sassOptions: {
        includePaths: fs.readdirSync(path.join(__dirname, 'components')).map(dir => path.join(__dirname, 'components', dir))
    }
}