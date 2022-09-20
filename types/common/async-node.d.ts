import { IEventMap } from './events';
export declare enum ChannelNames {
    GET_VALUE = "$0",
    GET_OBJECT = "$1",
    GET_MODULE_OBJECT = "$2",
    SET_PROP_NAME = "$3",
    RESULT = "$4"
}
export interface ChannelsSentByUI extends IEventMap {
    [ChannelNames.GET_VALUE]: [/* request id */ number, INodeValueRequest];
    [ChannelNames.GET_OBJECT]: [/* request id */ number, INodeValueRequest];
    [ChannelNames.GET_MODULE_OBJECT]: [/* request id */ number, /* module name */ string];
}
export interface ChannelsSentByNode extends IEventMap {
    [ChannelNames.RESULT]: [/*id*/ number, /* result (value or object id) */ any, /* isResultError */ boolean?];
}
export declare const GLOBAL_OBJECT_ID = -1;
export declare const CURRENT_WINDOW_ID = -2;
export declare const CURRENT_WEBVIEW_ID = -3;
export interface INodeValueRequest {
    target: number;
    actions: NodeValueAction[];
}
export declare enum ValueType {
    VALUE_REQUEST = 0,
    ARBITRARY = 1
}
export declare type Value = [ValueType.VALUE_REQUEST, INodeValueRequest] | [ValueType.ARBITRARY, any];
export declare enum NodeValueActionType {
    PROP = 0,
    INVOKE = 1,
    RESOLVE = 3
}
export declare type NodeValueAction = [NodeValueActionType.PROP, string] | [NodeValueActionType.INVOKE, [NodeValueInvokeReceiverType.METHOD, /* method name */ string] | [NodeValueInvokeReceiverType.NEW] | [NodeValueInvokeReceiverType.VALUE, /* the 'this' value */ Value], Value[]] | [NodeValueActionType.RESOLVE];
export declare enum NodeValueInvokeReceiverType {
    METHOD = 0,
    NEW = 1,
    VALUE = 2
}
