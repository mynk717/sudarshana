const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = {
  'images/sudarshana-logo.png': 'https://lh3.googleusercontent.com/sitesv/APaQ0SS-DS7i1DSHAdUtdjNQ74uGavmcE_Ezi0lTupCP3PFPV7gl2RGA2WNZ5B3SL4Bv7TQZGsXMVYR_fuQ3Fmp3JVgeK-kL87AozwZ-RTVNhm6ySFDLJbZzeDS9Bu7cpFCCLPnu4hAhDjJtlub4Ekkle7m2wfOKAjvHccW_qA7-zFEGTam-NmfHhYYyYTs=w16383',
  'images/hero/metal-sheets-manufacturing.jpg': 'https://lh3.googleusercontent.com/sitesv/APaQ0SRvir3OzBjZ3FkqN9ETDQNQsnrjgEniwM6jCrDVQ2js7ZuqdcYm4TnnvGqsLwARNeYxFwQZhBTeQcPPfTmzMHZex2FRfRTpORnQ_7NjZVZtENDCBDDESaQ_632ijXReBljOzJDfbl3CDFBMxaGbND1NMYgZaOsQgXRQTmfWyF0EktkQZsD9MrqC3mLzVH2Q1eu3e8mTyfTgaPL9DUVHZSIcfouc0qaPQKuCCKY=w1280',
};

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, '..', 'public', filepath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(fullPath);
    
    protocol.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fullPath, () => {});
      console.error(`✗ Failed: ${filepath} - ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...\n');
  
  for (const [filepath, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`Error downloading ${filepath}:`, error.message);
    }
  }
  
  console.log('\n✓ All downloads complete!');
}

downloadAll();
