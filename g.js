let gyroscope = new Gyroscope({frequency: 1})

gyroscope.addEventListener('reading', e => {
  document.getElementById('g').innerHTML = 'G - working updated3';
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
  document.getElementById('x').innerHTML = gyroscope.x
  document.getElementById('y').innerHTML = gyroscope.y
  document.getElementById('z').innerHTML = gyroscope.z
  
  var totalx = 0;
  totalx = totalx + gyroscope.x;
  var totaly = 0;
  totaly = totaly + gyroscope.y;
  var totalz = 0;
  totalz = totalz + gyroscope.z;
  console.log("Avg velocity along the X-axis " + totalx);
  console.log("Avg velocity along the Y-axis " + totaly);
  console.log("Avg velocity along the Z-axis " + totalz);
  document.getElementById('avgx').innerHTML = totalx
  document.getElementById('avgy').innerHTML = totaly
  document.getElementById('avgz').innerHTML = totalz
  
});
gyroscope.onerror = event => document.getElementById('gerror').innerHTML = event.error.message;
gyroscope.start();

let acl = new Accelerometer({frequency: 1});

acl.addEventListener('reading', () => {
  document.getElementById('a').innerHTML = 'A - working';
  console.log("Acceleration along the X-axis " + acl.x);
  console.log("Acceleration along the Y-axis " + acl.y);
  console.log("Acceleration along the Z-axis " + acl.z);
  document.getElementById('ax').innerHTML = acl.x
  document.getElementById('ay').innerHTML = acl.y
  document.getElementById('az').innerHTML = acl.z
});

acl.onerror = event => document.getElementById('aerror').innerHTML = event.error.message;

acl.start();
