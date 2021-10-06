function init(){

  var socialMedia =[
    'http://facebook.com',
    'http://twitter.com',
    'http://flickr.com',
    'http://youtube.com',
    'https://www.google.com',
    'https://www.linkedin.com',
    'https://www.meetup.com',
    'https://wordpress.com'
  ];

  var socialMediaImg = [
    'images/facebook.png',
    'images/twitter.png',
    'images/flickr.png',
    'images/youtube.png',
    'images/google.png',
    'images/linkedin.png',
    'images/meetup.png',
    'images/wordpress.png'
  ];

  var contenidoAMostrar ="";

  for (var i = 0; i < socialMedia.length; i++){
    contenidoAMostrar=contenidoAMostrar+'<li><a href="'+socialMedia[i]+'"><img src="'+socialMediaImg[i]+'" alt="logo red social"></a></li>';
  }

  document.getElementById("redesociales").innerHTML=contenidoAMostrar;
  document.getElementById("redesociale").innerHTML=contenidoAMostrar;
}

init();



