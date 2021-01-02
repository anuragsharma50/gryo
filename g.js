let gyroscope = new Gyroscope({frequency: 60});

console.log('hello')

gyroscope.addEventListener('reading', e => {
  document.getElementById('g').innerHTML = 'G - working';
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
  document.getElementById('x').innerHTML = gyroscope.x
  document.getElementById('y').innerHTML = gyroscope.y
  document.getElementById('z').innerHTML = gyroscope.z
});
gyroscope.onerror = event => document.getElementById('gerror').innerHTML = event.error.message;
gyroscope.start();

let acl = new Accelerometer({frequency: 60});

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
