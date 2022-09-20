import { EventEmitter } from '../common/events';
interface InternalDeskGap {
    platform: string;
    postStringMessage: (message: string) => void;
    messageReceived: (channelName: string, args: any[]) => void;
}
export declare const internalDeskGap: InternalDeskGap;
export declare class MessageUI extends EventEmitter<any> {
    constructor();
    /**
     * Send a message to the node thread asynchronously via channel, you can also send arbitrary arguments.
     * Arguments will be serialized in JSON internally and hence no functions or prototype chain will be included.
     * The node thread handles it by listening for channel with messageNode.
     * @param channel Channel name. Do not use channel names that are prefixed by `$`. They are reserved for internal use.
     * @param args Arguments
     */
    send(channel: string | number, ...args: any[]): void;
}
export declare const messageUI: MessageUI;
export {};
