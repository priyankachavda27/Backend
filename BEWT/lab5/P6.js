const EventEmitter = require("events");

// Create an EventEmitter instance
const emitter = new EventEmitter();

// Register an event "greet"
emitter.on("greet", () => {
    console.log("Hello! The greet event was triggered.");
});

// Fire the event manually
emitter.emit("greet");