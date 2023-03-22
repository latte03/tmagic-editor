/// <reference types="node" />
import { EventEmitter } from 'events';
import Moveable from 'moveable';
import TargetShadow from './TargetShadow';
import type { StageHighlightConfig } from './types';
export default class StageHighlight extends EventEmitter {
    container: HTMLElement;
    target?: HTMLElement;
    moveable?: Moveable;
    targetShadow: TargetShadow;
    private getRootContainer;
    constructor(config: StageHighlightConfig);
    /**
     * 高亮鼠标悬停的组件
     * @param el 选中组件的Dom节点元素
     */
    highlight(el: HTMLElement): void;
    /**
     * 清空高亮
     */
    clearHighlight(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
}
