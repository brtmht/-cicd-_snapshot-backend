// Include node fs (file stream) and https modules
const fs = require('fs')
const https = require('https')

function readWriteAsync () {
  // Create string of markdown to be inserted
  const updatedMd = `URL: [brt](https://cicd-snapshot-frontend.vercel.app/) \n \n \n ![alt text](https://github.com/brtmht/-cicd-_snapshot-backend/blob/main/screenshot.png?raw=true)`
  // Update README using FS
  fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) {
      throw err
    }

    // Write the new README
    fs.writeFile('README.md', updatedMd, 'utf-8', err => {
      if (err) {
        throw err
      }

      console.log('README update complete.')
    })
  })
}

// Call the function
readWriteAsync()
