import { ParamGroup, ParamName, ParamPatchType } from "./enum"
import { ParamData } from "./interface"
export const paramList:{ [paramName: string]: ParamData }={}

paramList[ParamName.alpha]={
    name:ParamName.alpha,
    group:ParamGroup.SETTING,
    toggle:{
        label:"alpha",
        description:"alpha",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"alpha",
        description:"alpha",
        type:ParamPatchType.slider,
        args:[0,1,0.01,false],
        defaultValue:[0.8,0.8,0.8,0.8,0.8],
    }]
}
paramList[ParamName.background_alpha]={
    name:ParamName.background_alpha,
    group:ParamGroup.SETTING,
    toggle:{
        label:"background_alpha",
        description:"background_alpha",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"background_alpha",
        description:"background_alpha",
        type:ParamPatchType.slider,
        args:[0,1,0.01,false],
        defaultValue:[0.8,0.8,0.8,0.8,0.8],
    }]
}
paramList[ParamName.battery]={
    name:ParamName.battery,
    group:ParamGroup.BATT,
    toggle:{
        label:"battery",
        description:"battary",
        defaultEnable:[false,false,true,true,true],
    },
    patch:[]
}
paramList[ParamName.battery_icon]={
    name:ParamName.battery_icon,
    group:ParamGroup.BATT,
    toggle:{
        label:"battery_icon",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_text]={
    name:ParamName.cpu_text,
    group:ParamGroup.CPU,
    toggle:{
        label:"cpu_text",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"cpu_text",
        description:"cpu_text",
        type:ParamPatchType.textInput,
        args:[false],
        defaultValue:["CPU","CPU","CPU","CPU","CPU"],
    }]
}
paramList[ParamName.core_load_change]={
    name:ParamName.core_load_change,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false}],
    toggle:{
        label:"core_load_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_load_change]={
    name:ParamName.cpu_load_change,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false}],
    toggle:{
        label:"cpu_load_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_mhz]={
    name:ParamName.cpu_mhz,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false},
                    {paramName:ParamName.cpu_stats,enable:true}],
    toggle:{
        label:"cpu_mhz",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_power]={
    name:ParamName.cpu_power,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false},
                    {paramName:ParamName.cpu_stats,enable:true}],
    toggle:{
        label:"cpu_power",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_stats]={
    name:ParamName.cpu_stats,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false}],
    toggle:{
        label:"cpu_stats",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_temp]={
    name:ParamName.cpu_temp,
    group:ParamGroup.CPU,
    dependenceParam:[{paramName:ParamName.legacy_layout,enable:false},
                    {paramName:ParamName.cpu_stats,enable:true}],
    toggle:{
        label:"cpu_temp",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.frame_timing]={
    name:ParamName.frame_timing,
    group:ParamGroup.OTHER,
    toggle:{
        label:"frame_timing",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_text]={
    name:ParamName.gpu_text,
    group:ParamGroup.GPU,
    toggle:{
        label:"gpu_text",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"gpu_text",
        description:"gpu_text",
        type:ParamPatchType.textInput,
        args:[false],
        defaultValue:["GPU","GPU","GPU","GPU","GPU"],
    }]
}
paramList[ParamName.gpu_power]={
    name:ParamName.gpu_power,
    group:ParamGroup.GPU,
    toggle:{
        label:"gpu_power",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_stats]={
    name:ParamName.gpu_stats,
    group:ParamGroup.GPU,
    toggle:{
        label:"gpu_stats",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_temp]={
    name:ParamName.gpu_temp,
    group:ParamGroup.GPU,
    toggle:{
        label:"gpu_temp",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.width]={
    name:ParamName.width,
    group:ParamGroup.SETTING,
    toggle:{
        label:"width",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"width",
        description:"width",
        type:ParamPatchType.slider,
        args:[1,2160,1,true],
        defaultValue:[800,800,800,800,800],
    }]
}
paramList[ParamName.offset_x]={
    name:ParamName.offset_x,
    group:ParamGroup.SETTING,
    toggle:{
        label:"offset_x",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"offset_x",
        description:"offset_x",
        type:ParamPatchType.slider,
        args:[1,2160,1,true],
        defaultValue:[0,0,0,0,0],
    }]
}
paramList[ParamName.offset_y]={
    name:ParamName.offset_y,
    group:ParamGroup.SETTING,
    toggle:{
        label:"offset_y",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"offset_y",
        description:"offset_y",
        type:ParamPatchType.slider,
        args:[1,2160,1,true],
        defaultValue:[0,0,0,0,0],
    }]
}
paramList[ParamName.legacy_layout]={
    name:ParamName.legacy_layout,
    group:ParamGroup.SETTING,
    toggle:{
        label:"legacy_layout",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}