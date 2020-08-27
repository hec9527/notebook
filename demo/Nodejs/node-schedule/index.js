const schedule = require('node-schedule');

let date = new Date() + 5;

schedule.scheduleJob('test', date, () => {
    console.log(new Date());
    date + 5;
    show();
});
