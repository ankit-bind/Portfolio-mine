import fs from 'fs';

const assetsDir = './dist/client/assets';
const files = fs.readdirSync(assetsDir);

const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
const mainJsFile = files.find(f => f.startsWith('main-') && f.endsWith('.js'));

if (!mainJsFile) {
  console.error('ERROR: Could not find main-*.js entry point in dist/client/assets');
  console.error('Available files:', files.join(', '));
  process.exit(1);
}

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
  <div id="root"></div>
  <script type="module" src="/assets/${mainJsFile}"></script>
</body>
</html>`;

fs.writeFileSync('./dist/client/index.html', html);
console.log(`Generated index.html with ${mainJsFile} (${(fs.statSync(`${assetsDir}/${mainJsFile}`).size / 1024).toFixed(1)} KB)`);
