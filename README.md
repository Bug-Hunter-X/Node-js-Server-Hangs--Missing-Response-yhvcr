# Node.js Server Hangs: Missing Response

This repository demonstrates a common issue in Node.js where a server hangs because it fails to send a response to the client.  The problem arises from missing `res.end()` or `res.writeHead()` calls within the request handler.  This results in an open connection that never closes.

**The Problem:**
The provided `server.js` demonstrates a server that listens on port 3000. However, it does not send any response to incoming requests, causing the connection to hang indefinitely. This can lead to performance issues and ultimately cause the server to become unresponsive.

**The Solution:**
The `serverSolution.js` provides a corrected version that includes `res.end()` to properly close the connection after processing the request. 

To run the example:
1.  Clone this repository.
2.  Navigate to the project directory.
3.  Run `node server.js` (or `node serverSolution.js` for the corrected version).