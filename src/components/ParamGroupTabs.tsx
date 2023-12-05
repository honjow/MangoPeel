import { Field, Focusable, PanelSectionRow } from 'decky-frontend-lib';
import React, { createElement, useEffect, useRef, useState } from 'react';

const L1Icon = createElement("img", {
  src: "/steaminputglyphs/sd_l1.svg"
})

const R1ICON = createElement("img", {
  src: "/steaminputglyphs/sd_r1.svg"
})
interface TabProp {
  label: string; 
  id: string;
  Node: React.ReactNode;
}

interface TabProps {
  initIndex?:number;
  props:TabProp[];
  onTabChange?:(index:number)=>void;
}
const Tab: React.FC<TabProps> = (tab:TabProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // 当前选中的Tab索引
  const [activeTab, setActiveTab] = useState(tab.props?.[activeIndex]); // 当前选中的Tab
  const [buttonPress,setButtonPress] = useState<number>(0); //记录L1R1是否按下
  const containerRef = useRef<HTMLDivElement>(null);  //标签栏组件引用
  const tabNodeRef =  useRef<(HTMLDivElement | null)>();//页面组件引用
  const activeIndexRef = useRef<number>(activeIndex); //当前激活的页面下标
  const L1StateRef =  useRef<boolean>(false); //l1状态
  const R1StateRef =  useRef<boolean>(false); //r1状态
  const tabRef = useRef<TabProps>(tab);
  const tabFocusedIndexRef = useRef<number[]>([]);//页面内激活的组件下标
  const tabFocusableElements = useRef<any>();

  // 聚焦到当前分页的第index个可聚焦组件
  const focusTabElement = (index: number) => {
    if(tabFocusableElements?.current && tabFocusableElements?.current?.length <= index){
      return;
    }
    (tabFocusableElements.current?.[index] as HTMLDivElement)?.focus();
  };

  //激活第index分页
  const setActiveTabByIndex = (index: number) => {
    var vaildIndex = Math.max(0,Math.min(index,(tabRef.current.props?.length??0)-1))
    setActiveIndex(vaildIndex);
    setActiveTab(tabRef.current.props?.[vaildIndex])
    activeIndexRef.current = vaildIndex;
    if (containerRef.current&&index==vaildIndex) {
      const childrenArray = Array.from(containerRef.current.children);
      const targetElement = childrenArray[index] as HTMLDivElement;
      containerRef.current.scrollLeft = targetElement.offsetLeft - containerRef.current.offsetLeft - 25;
    }
  };

  useEffect(()=>{
    //注册按键监听
    var handleButtonInput = async (val: any[]) => {
      /*
      R1 2 L1 3
      R2 0 L2 1
      Y  4 B  5 X  6 A  7
      UP 8 Right 9 Left 10 Down 11
      Select 12 Start 14
      Steam 13 
      */
      for (const inputs of val) {
        //按下标记
        if (inputs.ulButtons && inputs.ulButtons & (1 << 2)) {
          R1StateRef.current = true;
          setButtonPress(2);
        }
        else if(inputs.ulButtons && inputs.ulButtons & (1 << 3)) {
          L1StateRef.current = true;
          setButtonPress(1);
        }
        //松开触发事件
        if(R1StateRef.current && !(inputs.ulButtons & (1 << 2))){
          R1StateRef.current = false;
          setActiveTabByIndex(activeIndexRef.current+1);
          setTimeout(() => {
            setButtonPress(0);
          }, 100);
        }else if(L1StateRef.current && !(inputs.ulButtons & (1 << 3))){
          L1StateRef.current = false;
          setActiveTabByIndex(activeIndexRef.current-1);
          setTimeout(() => {
            setButtonPress(0);
          }, 100);
        }
      }
    }
    let input_register = window.SteamClient.Input.RegisterForControllerStateChanges(handleButtonInput);
    return (()=>{
      input_register.unregister();
    })
  },[])

  useEffect(()=>{
    tabRef.current = tab;
    //页数发生变化时重新定位索引位置
    if(tab?.props?.[activeIndexRef.current]?.id!=activeTab?.id){
        var isRefind = false;
        for (const [index,prop] of tab.props?.entries()??[]) {
          if(prop.id == activeTab?.id){
            isRefind = true;
            setActiveTabByIndex(index);
            break;
          }
        }
        if(!isRefind){
          setActiveTabByIndex(0);
        }
      }
  },[tab])

  useEffect(() => {
    //页数切换时监听聚焦事件
    tabFocusableElements.current = tabNodeRef?.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const createFocusListener = (index: number) => {
      const focusListener = () => {
          //聚焦时记录下标
          tabFocusedIndexRef.current[activeIndexRef.current]=index;
        };
      return focusListener;
    };
    const listeners: { element: Element; focusListener: (event: Event) => void; }[] = []; // 用于保存添加的监听器
    tabFocusableElements?.current.forEach((element:any,key:any) => {
      var focusListener = createFocusListener(key);
      element.addEventListener('focus', focusListener);
      listeners.push({ element, focusListener }); // 保存添加的监听器
      //console.log("添加focus监听: element",element,"key:",key);
    });
    
    if(!tabFocusedIndexRef?.current?.[activeIndexRef.current]){
        //console.log("无记录的聚焦组件,聚焦到第一个组件","当前页面为:",activeIndexRef.current);
        focusTabElement(0);
    }else{
      //console.log("调用聚焦事件,组件下标为:",tabFocusedIndexRef?.current?.[activeIndexRef.current],"当前页面为:",activeIndexRef.current);
      //聚焦到记录的组件位置
      focusTabElement(tabFocusedIndexRef?.current?.[activeIndexRef.current]);
    }
    tabRef?.current?.onTabChange && tabRef.current.onTabChange(activeIndexRef.current);
    return (()=>{
      listeners.forEach(({ element, focusListener }) => {
        element.removeEventListener('focus', focusListener);
        //console.log("移除focus监听:",activeIndexRef.current);
      });
    })
  }, [activeIndexRef.current]);


  return (
    <div>
    <PanelSectionRow>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{ position: 'absolute', left: 0, zIndex: 1,opacity:buttonPress==1?1:0.5}}>
          <Field icon={L1Icon} bottomSeparator={"none"}></Field>
        </div>

        <div ref={containerRef} style={{ display: '-webkit-inline-box', overflow:"scroll", width:180}}>
          {tab.props?.map((prop) => (
            <Field
              key={prop.label}
              label={<div style={{
                fontWeight: activeTab?.id === prop.id ? 'bold' : 'normal',
                fontSize: activeTab?.id === prop.id ? '1.1em' : '0.9em',
                color:activeTab?.id === prop.id ? '#ffffff':'#3d4450',
                padding: '10px',
                textAlign: 'center',
              }}>{prop.label}</div>}   
              bottomSeparator={"none"}
              highlightOnFocus={false}
            >
            </Field>
          ))}
        </div>

        <div style={{ position: 'absolute', right: -10, zIndex: 1 ,opacity:buttonPress==2?1:0.5}}>
          <Field icon={R1ICON} bottomSeparator={"none"}></Field>
        </div>
      </div>
    </PanelSectionRow>
    <Focusable key={activeTab?.id}
          ref={(ref)=>(tabNodeRef.current = ref)}>
      {activeTab?.Node}
    </Focusable>
  </div>
  );
};

export default Tab;
