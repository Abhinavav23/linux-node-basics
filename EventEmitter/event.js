const Event = require('events');

// console.log(Event);
// class LogEvent extends Event{}
/*
const LogEvents = new Event();

// success events
LogEvents.addListener('success', () => {
    console.log('successLogEvents called first');
    // open a file
    // log the results 
})

const secondListener = () => {
    console.log('successLogEvents called second');
    // open a file
    // log the results 
}

LogEvents.addListener('success', secondListener)

LogEvents.addListener('')


successLogEvents.emit('success'); //click 
// successLogEvents.emit('success');
// successLogEvents.emit('loggingSuccessful');


// Button.addEventListener('click', () => {

// })
*/

const LoginEvent = new Event();

// login
const navigateUserToHome = () => {
    // move the user to homepage
    // routing
    // load the data
    // console.log(`${userInfo.name} is a ${userInfo.role} and is moved to homepage`);
    console.log('navigateUserToHome called');
}

const loadCartValue = () => {
    // check which products were in the cart
    // add the products in the cart
    console.log('add the products in the cart');
}

const onceCalledCallback = () => {
    console.log('once called');
}

LoginEvent.setMaxListeners(3);

LoginEvent.addListener('login', navigateUserToHome);
LoginEvent.on('login', loadCartValue);

LoginEvent.on('login', function(){
    console.log(this);
    console.log(this === LoginEvent);
});


// only once for an event
// LoginEvent.once('login', onceCalledCallback);

// LoginEvent.emit('login', 'Abhinav', 'Instructor'); //raising an event 'login'
// LoginEvent.emit('login', 'Irshad', 'student'); 

// LoginEvent.emit('login', {name: 'Irshad', role: 'Enginner'}); //passing objects as parameter

// LoginEvent.emit('login'); //1


LoginEvent.emit('login'); //2
// LoginEvent.removeAllListeners('login');

// LoginEvent.removeListener('login', navigateUserToHome);
// LoginEvent.off('login', navigateUserToHome);

// LoginEvent.emit('login'); //2

// eventnames
// console.log(LoginEvent.eventNames()); // ['login']
// console.log(LoginEvent.listenerCount('login'));

// methods to try out
// 





// Logout
const clearUserData = () => {
    // remove all user specific data 
    // navigate user to login page
    console.log('logout and navigate user');
}
LoginEvent.addListener('logout', clearUserData)
// console.log(LoginEvent.eventNames());

// LoginEvent.emit('logout');

// LoginEvent.emit('login');
