function updateTime() {
  const currentDateTime = new Date(Date.now());

  const sTimeString = currentDateTime.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  $('.clock#seattle').replaceWith(`<div class="clock" id="seattle"><p>Seattle</p><p>${sTimeString}</p></div>`);

  const nyTimeString = currentDateTime.toLocaleString('en-US', { timeZone: 'America/New_York' });
  $('.clock#new-york').replaceWith(`<div class="clock" id="new-york"><p>New York</p><p>${nyTimeString}</p></div>`);

  const shTimeString = currentDateTime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  $('.clock#shanghai').replaceWith(`<div class="clock" id="shanghai"><p>上海</p><p>${shTimeString}</p></div>`);

  const ldTimeString = currentDateTime.toLocaleString('en-GB', { timeZone: 'Europe/London' });
  $('.clock#london').replaceWith(`<div class="clock" id="london"><p>London</p><p>${ldTimeString}</p></div>`);
}

const myTimer = setInterval(updateTime, 1000);
