function CopyToClipboard(link) {
  var input = document.body.appendChild(document.createElement("input"));
  input.value = link;
  input.focus();
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
  /*alert("Link Copied");*/
  navigator.clipboard.writeText(link);
}