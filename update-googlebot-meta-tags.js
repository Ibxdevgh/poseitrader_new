// Script to update all HTML files with Googlebot blocking meta tags
// Run with: node update-googlebot-meta-tags.js

const fs = require('fs');
const path = require('path');

const googlebotMetaTags = `    <!-- COMPLETE BLOCK: Googlebot crawling disabled to prevent bandwidth usage -->
    <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
    <meta name="googlebot-news" content="noindex, nofollow" />
    <meta name="googlebot-image" content="noindex, nofollow" />
    <meta name="googlebot-video" content="noindex, nofollow" />
    <meta name="AdsBot-Google" content="noindex, nofollow" />
    <meta name="AdsBot-Google-Mobile" content="noindex, nofollow" />`;

function updateHtmlFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove old googlebot meta tags
    content = content.replace(
      /<meta\s+name="googlebot[^"]*"\s+content="[^"]*"\s*\/?>/gi,
      ''
    );
    content = content.replace(
      /<meta\s+name="googlebot-news[^"]*"\s+content="[^"]*"\s*\/?>/gi,
      ''
    );
    content = content.replace(
      /<meta\s+name="googlebot-image[^"]*"\s+content="[^"]*"\s*\/?>/gi,
      ''
    );
    content = content.replace(
      /<meta\s+name="AdsBot-Google[^"]*"\s+content="[^"]*"\s*\/?>/gi,
      ''
    );
    
    // Find robots meta tag and insert googlebot tags after it
    const robotsMetaRegex = /(<meta\s+name="robots"[^>]*>)/i;
    if (robotsMetaRegex.test(content)) {
      content = content.replace(
        robotsMetaRegex,
        `$1\n${googlebotMetaTags}`
      );
    } else {
      // If no robots tag, find head tag and add after it
      const headRegex = /(<head[^>]*>)/i;
      if (headRegex.test(content)) {
        content = content.replace(
          headRegex,
          `$1\n${googlebotMetaTags}`
        );
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip docs folders (already blocked in robots.txt)
    if (filePath.includes('docs/core-nightly') || 
        filePath.includes('docs/core-latest') ||
        filePath.includes('docs/nightly') ||
        filePath.includes('docs/latest')) {
      return;
    }
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
const rootDir = __dirname;
const htmlFiles = findHtmlFiles(rootDir);

console.log(`Found ${htmlFiles.length} HTML files to update...`);

let updated = 0;
let failed = 0;

htmlFiles.forEach(file => {
  if (updateHtmlFile(file)) {
    updated++;
  } else {
    failed++;
  }
});

console.log(`\nUpdate complete!`);
console.log(`Updated: ${updated} files`);
console.log(`Failed: ${failed} files`);

