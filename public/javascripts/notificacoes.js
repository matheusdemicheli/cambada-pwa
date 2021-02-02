// Register a Service Worker.
navigator.serviceWorker.register('sw.js');

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

navigator.serviceWorker.ready
  .then(function(registration) {
  // Use the PushManager to get the user's subscription to the push service.
    return registration.pushManager.getSubscription()
  .then(async function(subscription){
      return assinar(subscription, registration);
  });
}).then(registrar);


function assinar(subscription, registration){
  /**
   * Monta a assinatura do usuário para receber notificações.
   */
  if (subscription) {
    return subscription;
  }

  const vapidPublicKey = 'BFg1VdS8njeZur1aWfWxm6SXuqp60zBBmdNnMTYDYqNIkpeKQz0ab6WfVmMcOnDKWPTjgzfMPWyDffvmT9H8Pos';
  // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
  // urlBase64ToUint8Array() is defined in /tools.js
  const convertedVapidKey = vapidPublicKey; //urlBase64ToUint8Array(vapidPublicKey);
  // const convertedVapidKey = vapidPublicKey;

  // Otherwise, subscribe the user (userVisibleOnly allows to specify that we don't plan to
  // send notifications that don't have a visible effect for the user).
  return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: convertedVapidKey
  });
}


function registrar(subscription){
  /**
   * Registra a assinatura no servidor.
   */
  var url = 'https://matheusmonego.pythonanywhere.com/app/registrar/';
  var url = 'http://localhost:8001/webpush/save_information/';

  fetch(url, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      subscription: subscription,
      'browser': navigator.userAgent.slice(0, 100),
      'status_type': 'subscribe',
      'group': 'todos'
    }),
  });
}
