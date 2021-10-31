const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@sharedComponents': resolvePath('./src/shared/components'),
            '@assets': resolvePath('./src/assets'),
            '@constants': resolvePath('./src/constants'),
            '@pages': resolvePath('./src/pages'),
            '@services': resolvePath('./src/services')
        }
    },
    // ...
}