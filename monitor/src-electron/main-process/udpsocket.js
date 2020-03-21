/***  
 * This class should listen to messages send over the UDP 5004 socket port
 * 
 ***/

import { createSocket } from 'dgram';
const server = createSocket('udp4');

const udpPort = 5004;

/***
 * Control class for the UDP socket 
*/
 class UdpSocket {
    static whoi(){
        return 1;
    }

    static bindSocket(){
        server.bind(udpPort);
    }

    /**
     * Send a message to a socket
     */
    static socketSend(msg, ipAddress){
        server.send(msg, this.port, ipAddress);
    }

 }

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});
  
server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
  
server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});