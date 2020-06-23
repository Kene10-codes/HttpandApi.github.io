const ourEvent = require('events');

class myEvents extends ourEvent {
     constructor() {
         super()
         var server1 = "This server is running";
         console.log(server1);
     }
}

const newEmitter = new myEvents();
newEmitter.on('event', ()=> {
    console.log(this.server1);
})

newEmitter.emit('event');