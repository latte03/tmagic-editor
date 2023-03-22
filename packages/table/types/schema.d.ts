import { FormConfig, FormValue } from '@tmagic/form';
export interface ColumnActionConfig {
    type?: 'delete' | 'copy' | 'edit';
    display?: (row: any) => boolean;
    text: string | ((row: any) => string);
    name: string;
    icon?: any;
    handler?: (row: any) => Promise<any> | any;
    before?: (row: any) => void;
    after?: (row: any) => void;
    action?: (data: {
        data: any;
    }) => void;
}
export type ColumnConfig = {
    form?: FormConfig;
    rules?: any;
    values?: FormValue;
    selection?: boolean | 'single';
    selectable?: (row: any, index: number) => boolean;
    label?: string;
    fixed?: 'left' | 'right' | boolean;
    width?: number | string;
    actions?: ColumnActionConfig[];
    type?: 'popover' | 'expand' | string | ((value: any, row: any) => string);
    text?: string;
    prop?: string;
    showHeader?: boolean;
    table?: ColumnConfig[];
    formatter?: 'datetime' | ((item: any, row: Record<string, any>) => any);
    popover?: {
        placement: string;
        width: string;
        trigger: string;
        tableEmbed: string;
    };
    sortable?: boolean | 'custom';
    action?: 'tip' | 'actionLink' | 'img' | 'link' | 'tag';
    handler?: (row: any) => void;
    /** 当type为expand时有效，展开为html */
    expandContent?: (row: any, prop?: string) => string;
    /** 当type为expand时有效，展开为vue组件 */
    component?: any;
    /** 当type为expand时有效，展开的vue组件props */
    props?: any;
};
