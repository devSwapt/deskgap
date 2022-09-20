export declare class UIDeskGap {
    readonly platform: "darwin" | "win32";
    readonly ipcRenderer: import("./bootstrap").MessageUI;
    readonly messageUI: import("./bootstrap").MessageUI;
    readonly asyncNode: {
        getGlobal(name: string): import("./async-node").NodeValue;
        require(moduleName: string): Promise<import("./async-node").NodeValue>;
        getCurrentWindow(): import("./async-node").NodeValue;
    };
}
declare global {
    interface Window {
        deskgap: UIDeskGap;
    }
}
