async function sendOtp(phoneNumber) {
    const accountSid = 'YOUR_TWILIO_SID';
    const authToken = 'YOUR_TWILIO_TOKEN';
    const client = new (await import('https://sdk.twilio.com/js/v0.1/twilio.min.js')).default(accountSid, authToken);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await client.messages.create({
        body: `Your OTP is ${otp}. It expires in 5 minutes.`,
        from: 'YOUR_TWILIO_NUMBER',
        to: `+91${phoneNumber}`
    });
    localStorage.setItem('otp', otp);
    localStorage.setItem('otpTimestamp', Date.now());
}