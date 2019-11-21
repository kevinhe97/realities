  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
      m = checkTime(m);

  var schedule = [12, 32, 52, 72, 92, 112, 132, 152, 172, 192, 212, 232, 462, 472, 482, 492, 502, 512, 522, 532, 542, 552, 562, 572, 582, 592, 602, 612, 632, 652, 672, 692, 712, 732, 752, 772, 792, 812, 832, 852, 872, 892, 912, 932, 942, 952, 962, 972, 982, 992, 1002, 1012, 1022, 1032, 1042, 1052, 1062, 1072, 1082, 1092, 1112, 1132, 1152, 1172, 1192, 1212, 1232, 1252, 1272, 1292, 1312, 1332, 1352, 1372, 1392, 1412, 1432];

  function circTime() {
    var i = 0;
    for (i=0; i < schedule.length; ++i){
      if ((h*60 + m) <= schedule[i]) {
        i++;
      }
      else {
        var dist = (schedule[i+1]-(h*60 + m));
      }
    }
    console.log(dist);
    var t = setTimeout(circTime, 1500);

    var textEl = document.getElementById("txt");
    textEl.setAttribute("value" , "The time is " + h + ":" + m + ". " + "\nThere are " + dist + " minutes until \nthe next Campus Circulator arrives.");

  }

 function checkTime(n) {
    if (n < 10) {n = "0" + n};  // add zero in front of numbers < 10
    return n;
  }