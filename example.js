function Click(){
    const food = document.getElementById("food").value;

    var qr = '<img src="https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl='+food+'" alt="QRコード">';
    document.getElementById('spaceqrcode').innerHTML = qr ;
  }
