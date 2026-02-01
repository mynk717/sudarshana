const https = require('https');
const fs = require('fs');
const path = require('path');

// ALL images from Google Site - including carousel images
const images = {
  // Logo
  'logo.png': 'https://lh3.googleusercontent.com/sitesv/APaQ0SS-DS7i1DSHAdUtdjNQ74uGavmcE_Ezi0lTupCP3PFPV7gl2RGA2WNZ5B3SL4Bv7TQZGsXMVYR_fuQ3Fmp3JVgeK-kL87AozwZ-RTVNhm6ySFDLJbZzeDS9Bu7cpFCCLPnu4hAhDjJtlub4Ekkle7m2wfOKAjvHccW_qA7-zFEGTam-NmfHhYYyYTs=w400',
  
  // Hero carousel images (original Google Site has multiple)
  'hero/slide-1.jpg': 'https://lh3.googleusercontent.com/sitesv/APaQ0SRvir3OzBjZ3FkqN9ETDQNQsnrjgEniwM6jCrDVQ2js7ZuqdcYm4TnnvGqsLwARNeYxFwQZhBTeQcPPfTmzMHZex2FRfRTpORnQ_7NjZVZtENDCBDDESaQ_632ijXReBljOzJDfbl3CDFBMxaGbND1NMYgZaOsQgXRQTmfWyF0EktkQZsD9MrqC3mLzVH2Q1eu3e8mTyfTgaPL9DUVHZSIcfouc0qaPQKuCCKY=w1920',
  
  // Products/Projects (use the main image for now, you can add more)
  'products/profile-sheets-1.jpg': 'https://lh3.googleusercontent.com/sitesv/APaQ0SRvir3OzBjZ3FkqN9ETDQNQsnrjgEniwM6jCrDVQ2js7ZuqdcYm4TnnvGqsLwARNeYxFwQZhBTeQcPPfTmzMHZex2FRfRTpORnQ_7NjZVZtENDCBDDESaQ_632ijXReBljOzJDfbl3CDFBMxaGbND1NMYgZaOsQgXRQTmfWyF0EktkQZsD9MrqC3mLzVH2Q1eu3e8mTyfTgaPL9DUVHZSIcfouc0qaPQKuCCKY=w1280',
  
  // OG Image for social sharing
  'og-image.jpg': 'https://lh3.googleusercontent.com/sitesv/APaQ0SRvir3OzBjZ3FkqN9ETDQNQsnrjgEniwM6jCrDVQ2js7ZuqdcYm4TnnvGqsLwARNeYxFwQZhBTeQcPPfTmzMHZex2FRfRTpORnQ_7NjZVZtENDCBDDESaQ_632ijXReBljOzJDfbl3CDFBMxaGbND1NMYgZaOsQgXRQTmfWyF0EktkQZsD9MrqC3mLzVH2Q1eu3e8mTyfTgaPL9DUVHZSIcfouc0qaPQKuCCKY=w1200',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(__dirname, '..', 'public', 'images', filepath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullPath);
    
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        console.log(`Following redirect for ${filepath}...`);
        https.get(redirectUrl, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✓ Downloaded: ${filepath}`);
            resolve();
          });
        }).on('error', (err) => {
          fs.unlinkSync(fullPath);
          console.error(`✗ Failed (redirect): ${filepath} - ${err.message}`);
          reject(err);
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
      console.error(`✗ Failed: ${filepath} - ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('🚀 Starting image downloads from Google Site...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [filepath, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filepath);
      successCount++;
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      failCount++;
      console.error(`❌ Error downloading ${filepath}:`, error.message);
    }
  }
  
  console.log(`\n✅ Download complete!`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log(`\nImages saved to: public/images/`);
}

downloadAll();
