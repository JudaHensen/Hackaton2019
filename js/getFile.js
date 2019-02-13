function getJson(url, stats){
  if(window.XMLHttpRequest) var xmlhttp = new XMLHttpRequest();
  else var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = ()=> {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      if(stats == 'choices') {
        choices = JSON.parse(xmlhttp.responseText);
        start();
      }
      else if(stats == 'special') {
        specialFunctions = JSON.parse(xmlhttp.responseText);
      }
    }
  }

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
