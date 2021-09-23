# audio data

View `public/index.html` for a list of sketches. 

Each sketch has its own README.md file.

This project consists of a Nodejs server that acts as a websocket host.
It can run in Glitch or on your local machine. Under the `public` directory
is the client-side HTML+JS that runs in the browser.

The sketches use the [Remote](https://github.com/ClintH/remote) library for sending and receiving data between different devices or browser windows/tabs. See the [repo](https://github.com/ClintH/remote) for more information on how to:
* Connect from your local machine to a Glitch-based server
* Enable/disable websockets
* Throttle message throughput

By default, receivers will discard data from senders with an ID different than itself. So if no data is flowing, make sure you set ids in both the sender and receiver.

In the following example, we disable using the broadcast channel, enable websockets and hard-code an id.

```
const r = new Remote({
  ourId:'sketch-1',
  useSockets:true,
  useBroadcastChannel:false
});
```

# Processing data

In most of these examples, data is either a single value or an array. Arrays are for frequency or time-distributed data.

## Techniques with arrays:

Averaging over time
* See `util/ArraySlidingWindow.js` for a helper class

Just use a single array item, treating it as a single value (see next section).
* See `beats/Beat.js`, which just uses a single frequency band for peak detection 

Finding the minimum, maximum and average across the array
* See `client` for an example
* See `util.js - getAvg` for an implementation

## Techniques with values:

Counting interval between events
* Eg, counting time between peaks of amplitude
* See `beats` for an example
* See `util/IntervalMeter.js` for a helper class

Mapping to a relative value
* See `util.js - clamp` that helps you remap values
