import { Menu } from './menu';
import { EventEmitter, IEventMap } from '../common/events';
declare const pathNameValues: {
    'appData': number;
    'temp': number;
    'desktop': number;
    'documents': number;
    'downloads': number;
    'music': number;
    'pictures': number;
    'videos': number;
    'home': number;
    'userData': number;
};
export declare type PathName = keyof typeof pathNameValues;
export interface AppEvents extends IEventMap {
    /**
     * Emitted when DeskGap has finished initializing.
     */
    'ready': [];
    /**
     * Emitted when all windows have been closed.
     *
     * If you do not subscribe to this event and all windows are closed, the default behavior is to quit the app;
     * however, if you subscribe, you control whether the app quits or not.
     * If the user pressed `Cmd + Q`, or the developer called `app.quit()`,
     * DeskGap will first try to close all the windows and then emit the `will-quit` event,
     * and in this case the `window-all-closed` event would not be emitted.
     */
    'window-all-closed': [];
    'will-quit': [];
    'before-quit': [];
    /**
     * Emitted when the application is quitting.
     * @param 0 [[IEventObject]]
     * @param 1 The exit code
     */
    'quit': [number];
}
/**
 * Control your application's event lifecycle.
 *
 * Thread: Node
 */
export declare class App extends EventEmitter<AppEvents> {
    constructor();
    getAppPath(): string;
    quit(): void;
    exit(code?: number): void;
    whenReady(): Promise<void>;
    isReady(): boolean;
    getName(): string;
    setName(value: string): void;
    getVersion(): string | null;
    setVersion(version: string): void;
    setPath(name: PathName, value: string): void;
    getPath(name: PathName): string;
    setMenu(menu: Menu | null): void;
    getMenu(): Menu | null;
}
declare const app: App;
export default app;
