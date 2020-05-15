import express from 'express';
const app = express();
app.get('/', function (req, res) {
  const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React JS no Servidor e no front!</title>
</head>
<body>

</body>
</html>
  `
  res.send(html);
});
app.listen(3030, function () {
  console.log('Servidor runig port 3030!');
});