export declare class NodeValue {
    private readonly request_;
    private constructor();
    private appendingActions;
    private static getArgValues;
    prop(...names: string[]): NodeValue;
    invoke(methodName: string, ...params: any[]): NodeValue;
    construct(...params: any[]): NodeValue;
    resolve(): NodeValue;
    value(): Promise<any>;
    object(): Promise<NodeValue>;
    static readonly globalObject: NodeValue;
    static readonly currentWindow: NodeValue;
    static require(moduleName: string): Promise<NodeValue>;
}
declare const _default: {
    getGlobal(name: string): NodeValue;
    require(moduleName: string): Promise<NodeValue>;
    getCurrentWindow(): NodeValue;
};
export default _default;
