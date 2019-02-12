function getJson(url){
  if(window.XMLHttpRequest) var xmlhttp = new XMLHttpRequest();
  else var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = ()=> {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      choices = JSON.parse(xmlhttp.responseText);
      start();
    }
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
