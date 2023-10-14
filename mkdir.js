const fs = require('fs');

// Create a directory
// fs.mkdir('mydir', (err) => {
//   if (err) throw err;
//   console.log('Directory created');
// });

// Remove a directory (if empty)
fs.rmdir('mydi', (err) => {
  if (err) throw err;
  console.log('Directory removed');
});