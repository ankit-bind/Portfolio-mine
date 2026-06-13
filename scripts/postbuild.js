import fs from 'fs';

const assetsDir = './dist/client/assets';
const files = fs.readdirSync(assetsDir);

const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

// Find the main JS entry chunk (the large one that contains React + router bootstrap)
const jsFiles = files.filter(f => f.endsWith('.js'));
const mainJsFile = jsFiles.reduce((largest, current) => {
  const largestSize = fs.statSync(`${assetsDir}/${largest}`).size;
  const currentSize = fs.statSync(`${assetsDir}/${current}`).size;
  return currentSize > largestSize ? current : largest;
}, jsFiles[0]);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ankit Bind — Data Science Portfolio</title>
  <meta name="description" content="Editorial portfolio of Ankit Bind — Data Science student, AI enthusiast, and analyst based in Greater Noida, India.">
  <link rel="stylesheet" href="/assets/${cssFile}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/assets/${mainJsFile}"></script>
</body>
</html>`;

fs.writeFileSync('./dist/client/index.html', html);
console.log(`Generated index.html with ${mainJsFile} (${(fs.statSync(`${assetsDir}/${mainJsFile}`).size / 1024).toFixed(1)} KB)`);
