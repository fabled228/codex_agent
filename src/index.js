require('dotenv').config();
const cron = require('node-cron');
const fetch = require('node-fetch');
const fs = require('fs');

cron.schedule(`*/${process.env.PATH_NGINX} * * * *`, () => {
  fs.readdir(process.env.PATH_NGINX, (err, projects) => {
    if (err) {
      console.log(err);
      return err
    };
    fetch(process.env.URL, {
      method: 'post',
      body: JSON.stringify({projects, serverName: 'test'}),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json()).then(data => console.log(data));
  });
});
