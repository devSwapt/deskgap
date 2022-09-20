import { BrowserWindow } from './browser-window';
import { Role } from './internal/menu/roles';
export declare type MenuItemType = 'normal' | 'separator' | 'submenu' | 'checkbox';
export declare const MenuTypeCode: {
    main: number;
    context: number;
    submenu: number;
};
export interface MenuItemConstructorOptions {
    role: Role;
    submenu: Array<Partial<MenuItemConstructorOptions> | null> | Menu;
    type: MenuItemType;
    label: string;
    enabled: boolean;
    checked: boolean;
    click: (item: MenuItem, window: BrowserWindow) => void;
    accelerator: string;
}
export interface IMenuPopupOptions {
    window?: BrowserWindow;
    x?: number;
    y?: number;
    positioningItem?: number;
}
export declare class Menu {
    items: MenuItem[];
    append(menuItem: MenuItem): void;
    popup(optionsOrWindow?: BrowserWindow | IMenuPopupOptions): void;
    static setApplicationMenu(menu: Menu | null): void;
    static getApplicationMenu(): Menu | null;
    static buildFromTemplate(template: Array<Partial<MenuItemConstructorOptions> | null>): Menu;
}
export declare class MenuItem {
    click: (item: MenuItem, window: BrowserWindow | null) => void;
    constructor(options?: Partial<MenuItemConstructorOptions>);
    get label(): string;
    get submenu(): Menu | null;
    get enabled(): boolean;
    set enabled(value: boolean);
    get checked(): boolean;
    set checked(value: boolean);
    get accelerator(): string;
}
