/// <reference types="node" />
import EventEmitter from 'events';
import { MoveableOptions } from 'moveable';
import { GuidesType, Mode } from './const';
import { MoveableOptionsManagerConfig } from './types';
/**
 * 单选和多选的父类，用于管理moveableOptions
 * @extends EventEmitter
 */
export default class MoveableOptionsManager extends EventEmitter {
    /** 布局方式：流式布局、绝对定位、固定定位 */
    mode: Mode;
    /** 画布容器 */
    protected container: HTMLElement;
    /** 水平参考线 */
    private horizontalGuidelines;
    /** 垂直参考线 */
    private verticalGuidelines;
    /** 对齐元素集合 */
    private elementGuidelines;
    /** 由外部调用方（编辑器）传入进来的moveable默认参数，可以为空，也可以是一个回调函数 */
    private customizedOptions?;
    /** 获取整个画布的根元素（在StageCore的mount函数中挂载的container） */
    private getRootContainer;
    constructor(config: MoveableOptionsManagerConfig);
    /**
     * 设置水平/垂直参考线
     * @param type 参考线类型
     * @param guidelines 参考线坐标数组
     */
    setGuidelines(type: GuidesType, guidelines: number[]): void;
    /**
     * 清除横向和纵向的参考线
     */
    clearGuides(): void;
    /**
     * 设置有哪些元素要辅助对齐
     * @param selectedElList 选中的元素列表，需要排除在对齐元素之外
     * @param allElList 全部元素列表
     */
    protected setElementGuidelines(selectedElList: HTMLElement[], allElList: HTMLElement[]): void;
    /**
     * 获取moveable参数
     * @param isMultiSelect 是否多选模式
     * @param runtimeOptions 调用时实时传进来的的moveable参数
     * @returns moveable所需参数
     */
    protected getOptions(isMultiSelect: boolean, runtimeOptions?: MoveableOptions): MoveableOptions;
    /**
     * 获取单选和多选的moveable公共参数
     * @returns moveable公共参数
     */
    private getDefaultOptions;
    /**
     * 获取单选下的差异化参数
     * @returns {MoveableOptions} moveable options参数
     */
    private getSingleOptions;
    /**
     * 获取多选下的差异化参数
     * @returns {MoveableOptions} moveable options参数
     */
    private getMultiOptions;
    /**
     * 获取业务方自定义的moveable参数
     */
    private getCustomizeOptions;
    /**
     * 这是给selectParentAbles的回调函数，用于触发选中父元素事件
     */
    private actionHandler;
    /**
     * 为需要辅助对齐的元素创建div
     * @param selectedElList 选中的元素列表，需要排除在对齐元素之外
     * @param allElList 全部元素列表
     * @returns frame 辅助对齐元素集合的页面片
     */
    private createGuidelineElements;
    /**
     * 判断一个元素是否在元素列表里面
     * @param ele 元素
     * @param eleList 元素列表
     * @returns 是否在元素列表里面
     */
    private isInElementList;
}