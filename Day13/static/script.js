function checkCookie() {
    var user = document.cookie;
    if (document.cookie != "") {
        console.log("cookie:",document.cookie );
        document.getElementById("signInForm").style.display="none";
        document.getElementById("Greeting").style.display="block";
      
    } else {
  
      console.log("no cookie");
      document.getElementById("signInForm").style.display="block";
      document.getElementById("Greeting").style.display="none";
      }
    }

checkCookie();

document.window.location;

(function() {
  const idleDurationSecs = 9;
  const redirectUrl = '/logedout';
  let idleTimeout;

  const resetIdleTimeout = function() {
      if(idleTimeout) clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => location.href = redirectUrl, idleDurationSecs * 1000);
  };

// Key events for reset time
  resetIdleTimeout();
  window.onmousemove = resetIdleTimeout;
  window.onkeypress = resetIdleTimeout;
  window.click = resetIdleTimeout;
  window.onclick = resetIdleTimeout;
  window.touchstart = resetIdleTimeout;
  window.onfocus = resetIdleTimeout;
  window.onchange = resetIdleTimeout;
  window.onmouseover = resetIdleTimeout;
  window.onmouseout = resetIdleTimeout;
  window.onmousemove = resetIdleTimeout;
  window.onmousedown = resetIdleTimeout;
  window.onmouseup = resetIdleTimeout;
  window.onkeypress = resetIdleTimeout;
  window.onkeydown = resetIdleTimeout;
  window.onkeyup = resetIdleTimeout;
  window.onsubmit = resetIdleTimeout;
  window.onreset = resetIdleTimeout;
  window.onselect = resetIdleTimeout;
  window.onscroll = resetIdleTimeout;

})();