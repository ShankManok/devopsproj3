const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid=process.env.NOTIFY_SERVICE_SID;

const client=require('twilio')(accountSid, authtoken);

client.notify.services(notifyServiceSid)
.notifications.create({
toBinding:JSON.stringify({
  binding_type:'sms', address:process.env.MY_PHONE_NUMBER
}),
  body: 'SMS sent!'
})
.then(notification=>console.log(notification.sid))
.catch(error=>console.log(error));
