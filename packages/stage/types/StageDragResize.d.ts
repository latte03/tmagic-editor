import MoveableOptionsManager from './MoveableOptionsManager';
import type { StageDragResizeConfig } from './types';
/**
 * 管理单选操作，响应选中操作，初始化moveableOption参数并初始化moveable，处理moveable回调事件对组件进行更新
 * @extends MoveableOptionsManager
 */
export default class StageDragResize extends MoveableOptionsManager {
    /** 目标节点 */
    private target?;
    /** Moveable拖拽类实例 */
    private moveable?;
    /** 拖动状态 */
    private dragStatus;
    private dragResizeHelper;
    private disabledDragStart?;
    private getRenderDocument;
    private markContainerEnd;
    private delayedMarkContainer;
    constructor(config: StageDragResizeConfig);
    getTarget(): HTMLElement | undefined;
    /**
     * 将选中框渲染并覆盖到选中的组件Dom节点上方
     * 当选中的节点不是absolute时，会创建一个新的节点出来作为拖拽目标
     * @param el 选中组件的Dom节点元素
     * @param event 鼠标事件
     */
    select(el: HTMLElement, event?: MouseEvent): void;
    /**
     * 初始化选中框并渲染出来
     */
    updateMoveable(el?: HTMLElement | undefined): void;
    clearSelectStatus(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    private init;
    private initMoveable;
    private bindResizeEvent;
    private bindDragEvent;
    private bindRotateEvent;
    private bindScaleEvent;
    private sort;
    private update;
}
