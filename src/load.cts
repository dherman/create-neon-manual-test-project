module.exports = require('@neon-rs/load').proxy({
  platforms: {
    'win32-x64-msvc': () => require('@create-neon-manual-test-project/win32-x64-msvc'),
    'darwin-x64': () => require('@create-neon-manual-test-project/darwin-x64'),
    'darwin-arm64': () => require('@create-neon-manual-test-project/darwin-arm64'),
    'linux-x64-gnu': () => require('@create-neon-manual-test-project/linux-x64-gnu')
  },
  debug: () => require('../index.node')
});
