require('dotenv').config();
const cron = require('node-cron');
const fetch = require('node-fetch');
const fs = require('fs');

cron.schedule(`* ${process.env.MINUTES} * * *`, () => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return err
    };
    fetch(process.env.URL, {
      method: 'post',
      body: JSON.stringify(files),
      headers: { 'Content-Type': 'application/json' },
    });
  });
});
