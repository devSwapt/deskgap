import { EventEmitter, IEventMap } from '../common/events';
declare type Engine = 'winrt' | 'trident';
export interface WebViewEvents extends IEventMap {
    'did-finish-load': [];
    'page-title-updated': [string];
}
export interface WebPreferences {
    engine: Engine | null;
}
export declare class WebView extends EventEmitter<WebViewEvents> {
    constructor(callbacks: {
        onPageTitleUpdated: (title: string) => void;
        onReadyToShow: () => void;
    }, preferences: WebPreferences);
    get id(): number;
    get engine(): Engine | null;
    isDestroyed(): boolean;
    loadFile(filePath: string): void;
    loadURL(url: string): void;
    send(channelName: string, ...args: any[]): void;
    executeJavaScript(code: string): Promise<any>;
    setDevToolsEnabled(enabled: boolean): void;
    isDevToolsEnabled(): boolean;
    reload(): void;
}
export declare const WebViews: {
    getAllWebViews(): WebView[];
    /**
     * Alias to [[getAllWebViews]]
     */
    getAllWebContents(): WebView[];
    /**
     * Alias to [[getFocusedWebView]]
     */
    getFocusedWebContents(): WebView | null;
    getFocusedWebView(): WebView | null;
    fromId(id: number): WebView | null;
    setDefaultEngine(engine: Engine): void;
    getDefaultEngine(): "winrt" | "trident" | null;
    isEngineAvailable(engine: Engine): boolean;
};
export {};
