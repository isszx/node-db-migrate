function Electron () {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to true
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}

function Linux () {
  return process.platform === 'linux';
}

function Mac () {
  return process.platform === 'darwin';
}

function Win () {
  return process.platform === 'win32';
}

module.exports.Electron = Electron();
module.exports.Linux = Linux();
module.exports.Mac = Mac();
module.exports.Win = Win();
