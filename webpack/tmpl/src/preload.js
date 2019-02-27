window.addEventListener('DOMContentLoaded', event => {
  document.getElementById('node-version').innerText = process.versions.node
  document.getElementById('chromium-version').innerText = process.versions.chrome
  document.getElementById('electron-version').innerText = process.versions.electron
})
