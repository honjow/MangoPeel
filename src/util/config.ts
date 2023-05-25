import { ParamGroup, ParamName, ParamPatchType } from "./enum"
import { ParamData } from "./interface"
export const paramList:{ [paramName: string]: ParamData }={}

paramList[ParamName.legacy_layout]={
    name:ParamName.legacy_layout,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"legacy_layout",
        defaultEnable:[true,false,false,true,true],
        isShowPatchWhenEnable:false,
    },
    patch:[{
        type:ParamPatchType.resortableList,
        args:[{label:"CUSTOM_TEXT_CENTER",value:ParamName.custom_text_center},
        {label:"CUSTOM_TEXT",value:ParamName.custom_text},
        {label:"TIME",value:ParamName.time},
        {label:"VERSION",value:ParamName.version},
        {label:"CPU",value:ParamName.cpu_stats},
        {label:"GPU",value:ParamName.gpu_stats},
        {label:"VRAM",value:ParamName.vram},
        {label:"RAM",value:ParamName.ram},
        {label:"BATT",value:ParamName.battery},
        {label:"FAN",value:ParamName.fan},
        {label:"FSR",value:ParamName.fsr},
        {label:"GAMESCOPE",value:ParamName.fps},
        {label:"FRAME_TIME",value:ParamName.frame_timing},
        {label:"FRAME_COUNT",value:ParamName.frame_count}
        ],
        defaultValue:[
        [
            ParamName.custom_text_center,
            ParamName.custom_text,
            ParamName.time,
            ParamName.version,
            ParamName.cpu_stats,
            ParamName.gpu_stats,
            ParamName.vram,
            ParamName.ram,
            ParamName.battery,
            ParamName.fan,
            ParamName.fsr,
            ParamName.fps,
            ParamName.frame_timing,
            ParamName.frame_count
        ],
        [
            ParamName.custom_text_center,
            ParamName.custom_text,
            ParamName.time,
            ParamName.version,
            ParamName.cpu_stats,
            ParamName.gpu_stats,
            ParamName.vram,
            ParamName.ram,
            ParamName.battery,
            ParamName.fan,
            ParamName.fsr,
            ParamName.fps,
            ParamName.frame_timing,
            ParamName.frame_count
        ],
        [
            ParamName.custom_text_center,
            ParamName.custom_text,
            ParamName.time,
            ParamName.version,
            ParamName.cpu_stats,
            ParamName.gpu_stats,
            ParamName.vram,
            ParamName.ram,
            ParamName.battery,
            ParamName.fan,
            ParamName.fsr,
            ParamName.fps,
            ParamName.frame_timing,
            ParamName.frame_count
        ],
        [
            ParamName.custom_text_center,
            ParamName.custom_text,
            ParamName.time,
            ParamName.version,
            ParamName.cpu_stats,
            ParamName.gpu_stats,
            ParamName.vram,
            ParamName.ram,
            ParamName.battery,
            ParamName.fan,
            ParamName.fsr,
            ParamName.fps,
            ParamName.frame_timing,
            ParamName.frame_count
        ],
        [
            ParamName.custom_text_center,
            ParamName.custom_text,
            ParamName.time,
            ParamName.version,
            ParamName.cpu_stats,
            ParamName.gpu_stats,
            ParamName.vram,
            ParamName.ram,
            ParamName.battery,
            ParamName.fan,
            ParamName.fsr,
            ParamName.fps,
            ParamName.frame_timing,
            ParamName.frame_count
        ],],
    }]
}
paramList[ParamName.horizontal]={
    name:ParamName.horizontal,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.no_display,ParamName.fps_only]}],
    toggle:{
        label:"horizontal",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[]
}
paramList[ParamName.table_columns]={
    name:ParamName.table_columns,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.no_display,ParamName.fps_only]}],
    toggle:{
        label:"table_columns",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[{
        type:ParamPatchType.slider,
        args:[1,50,1],
        defaultValue:[3,3,14,3,3],
    }]
}
paramList[ParamName.width]={
    name:ParamName.width,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"width",
        defaultEnable:[false,true,false,false,false],
    },
    patch:[{
        label:"width",
        description:"width",
        type:ParamPatchType.slider,
        args:[1,2160,1,true],
        defaultValue:[331,40,331,331,331],
    }]
}
paramList[ParamName.position]={
    name:ParamName.position,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"position",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[
        {
            label:"position",
            type:ParamPatchType.dropdown,
            args:["top-left","top-right","middle-left","middle-right","bottom-left","bottom-right","top-center","bottom_center"],
            defaultValue:["top-left","top-left","top-left","top-left","top-left"],
        }
    ]
}
paramList[ParamName.hud_no_margin]={
    name:ParamName.hud_no_margin,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"hud_no_margin",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[]
}
paramList[ParamName.offset_x]={
    name:ParamName.offset_x,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"offset_x",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"offset_x",
        description:"offset_x",
        type:ParamPatchType.slider,
        args:[0,2160,1,true],
        defaultValue:[0,0,0,0,0],
    }]
}
paramList[ParamName.offset_y]={
    name:ParamName.offset_y,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"offset_y",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"offset_y",
        description:"offset_y",
        type:ParamPatchType.slider,
        args:[0,2160,1,true],
        defaultValue:[0,0,0,0,0],
    }]
}
paramList[ParamName.fps_only]={
    name:ParamName.fps_only,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"fps_only",
        defaultEnable:[false,true,false,false,false],
    },
    patch:[]
}
paramList[ParamName.no_display]={
    name:ParamName.no_display,
    group:ParamGroup.LAYOUT,
    preCondition:[],
    toggle:{
        label:"no_display",
        defaultEnable:[true,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.alpha]={
    name:ParamName.alpha,
    group:ParamGroup.SETTING,
    preCondition:[{disable:[ParamName.no_display]}],
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
        defaultValue:[1,1,1,1,1],
    }]
}
paramList[ParamName.background_alpha]={
    name:ParamName.background_alpha,
    group:ParamGroup.SETTING,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"background_alpha",
        description:"background_alpha",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"background_alpha",
        description:"background_alpha",
        type:ParamPatchType.slider,
        args:[0,1,0.01],
        defaultValue:[1,1,1,1,1],
    }]
}
/*
paramList[ParamName.font_size]={
    name:ParamName.font_size,
    group:ParamGroup.SETTING,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"font_size",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        type:ParamPatchType.slider,
        args:[1,40,1],
        defaultValue:[24,24,24,24,24],
    }]
}*/
paramList[ParamName.font_scale]={
    name:ParamName.font_scale,
    group:ParamGroup.SETTING,
    preCondition:[{disable:[ParamName.no_display]}],
    toggle:{
        label:"font_scale",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        type:ParamPatchType.slider,
        args:[0.1,4,0.1],
        defaultValue:[1,1,1,1,1],
    }]
}
paramList[ParamName.full]={
    name:ParamName.full,
    group:ParamGroup.LAYOUT,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"full",
        defaultEnable:[false,false,false,false,true],
    },
    patch:[]
}
paramList[ParamName.custom_text_center]={
    name:ParamName.custom_text_center,
    group:ParamGroup.CUSTOM,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"custom_text_center",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"custom_text_center",
        description:"custom_text_center",
        type:ParamPatchType.textInput,
        args:[false],
        defaultValue:["STEAM DECK","STEAM DECK","STEAM DECK","STEAM DECK","STEAM DECK"],
    }]
}
paramList[ParamName.custom_text]={
    name:ParamName.custom_text,
    group:ParamGroup.CUSTOM,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"custom_text",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[{
        label:"custom_text",
        description:"custom_text",
        type:ParamPatchType.textInput,
        args:[false],
        defaultValue:["MangoPeel","MangoPeel","MangoPeel","MangoPeel","MangoPeel"],
    }]
}
paramList[ParamName.time]={
    name:ParamName.time,
    group:ParamGroup.CUSTOM,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"time",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.version]={
    name:ParamName.version,
    group:ParamGroup.CUSTOM,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"version",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_stats]={
    name:ParamName.cpu_stats,
    group:ParamGroup.CPU,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"cpu_stats",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_text]={
    name:ParamName.cpu_text,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display]}],
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
paramList[ParamName.cpu_load_change]={
    name:ParamName.cpu_load_change,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"cpu_load_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.core_load]={
    name:ParamName.core_load,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"core_load",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.core_load_change]={
    name:ParamName.core_load_change,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats,ParamName.core_load],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout,ParamName.core_load],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"core_load_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_mhz]={
    name:ParamName.cpu_mhz,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"cpu_mhz",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.cpu_power]={
    name:ParamName.cpu_power,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"cpu_power",
        defaultEnable:[false,false,true,true,true],
    },
    patch:[]
}
paramList[ParamName.cpu_temp]={
    name:ParamName.cpu_temp,
    group:ParamGroup.CPU,
    preCondition:[{enable:[ParamName.cpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"cpu_temp",
        defaultEnable:[false,false,false,true,true],
    },
    patch:[]
}

paramList[ParamName.gpu_stats]={
    name:ParamName.gpu_stats,
    group:ParamGroup.GPU,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"gpu_stats",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_text]={
    name:ParamName.gpu_text,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display]}],
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
paramList[ParamName.gpu_load_change]={
    name:ParamName.gpu_load_change,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"gpu_load_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_core_clock]={
    name:ParamName.gpu_core_clock,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"gpu_core_clock",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.gpu_power]={
    name:ParamName.gpu_power,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"gpu_power",
        defaultEnable:[false,false,true,true,true],
    },
    patch:[]
}
paramList[ParamName.gpu_temp]={
    name:ParamName.gpu_temp,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"gpu_temp",
        defaultEnable:[false,false,false,true,true],
    },
    patch:[]
}
/*
paramList[ParamName.gpu_name]={
    name:ParamName.gpu_name,
    group:ParamGroup.GPU,
    preCondition:[{enable:[ParamName.gpu_stats],disable:[ParamName.legacy_layout]},
                {enable:[ParamName.legacy_layout]}],
    toggle:{
        label:"gpu_name",
        defaultEnable:[false,false,false,true,true],
    },
    patch:[]
}*/
/*
paramList[ParamName.io_stats]={
    name:ParamName.io_stats,
    group:ParamGroup.IO,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"io_stats",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.io_read]={
    name:ParamName.io_read,
    group:ParamGroup.IO,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"io_read",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.io_write]={
    name:ParamName.io_write,
    group:ParamGroup.IO,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"io_write",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
*/
paramList[ParamName.vram]={
    name:ParamName.vram,
    group:ParamGroup.RAM,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display,ParamName.legacy_layout]},
                    {disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"vram",
        defaultEnable:[false,false,false,true,true],
    },
    patch:[]
}
paramList[ParamName.ram]={
    name:ParamName.ram,
    group:ParamGroup.RAM,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display,ParamName.legacy_layout]},
                    {disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"ram",
        defaultEnable:[false,false,true,true,true],
    },
    patch:[]
}
paramList[ParamName.swap]={
    name:ParamName.swap,
    group:ParamGroup.RAM,
    preCondition:[{enable:[ParamName.ram],disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"swap",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.battery]={
    name:ParamName.battery,
    group:ParamGroup.BATT,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display,ParamName.legacy_layout]},
                {disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
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
    preCondition:[{enable:[ParamName.battery],disable:[ParamName.no_display,ParamName.fps_only]},
                {enable:[ParamName.legacy_layout,ParamName.full],disable:[ParamName.no_display,ParamName.fps_only]}],
    toggle:{
        label:"battery_icon",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.fan]={
    name:ParamName.fan,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display,ParamName.legacy_layout]},
                    {disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"fan",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.fsr]={
    name:ParamName.fsr,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display,ParamName.legacy_layout]},
                    {disable:[ParamName.fps_only,ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"fsr",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}
paramList[ParamName.fps]={
    name:ParamName.fps,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.no_display]}],
    toggle:{
        label:"fps",
        defaultEnable:[false,true,true,false,false],
    },
    patch:[]
}
paramList[ParamName.fps_color_change]={
    name:ParamName.fps_color_change,
    group:ParamGroup.OTHER,
    preCondition:[{enable:[ParamName.fps],disable:[ParamName.legacy_layout,ParamName.no_display,ParamName.full]},
                {enable:[ParamName.legacy_layout],disable:[ParamName.no_display,ParamName.full]}],
    toggle:{
        label:"fps_color_change",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}

/*
paramList[ParamName.arch]={
    name:ParamName.arch,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"arch",
        defaultEnable:[true,false,false,true,true],
    },
    patch:[]
}
paramList[ParamName.wine]={
    name:ParamName.wine,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"wine",
        defaultEnable:[true,false,false,true,true],
    },
    patch:[]
}*/
paramList[ParamName.frame_timing]={
    name:ParamName.frame_timing,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"frame_timing",
        defaultEnable:[false,false,true,false,false],
    },
    patch:[]
}
paramList[ParamName.frame_count]={
    name:ParamName.frame_count,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.legacy_layout,ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"frame_count",
        defaultEnable:[false,false,false,false,false],
    },
    patch:[]
}

paramList[ParamName.frametime]={
    name:ParamName.frametime,
    group:ParamGroup.OTHER,
    preCondition:[{disable:[ParamName.fps_only,ParamName.no_display]}],
    toggle:{
        label:"frame_time",
        defaultEnable:[false,false,false,true,true],
    },
    patch:[]
}
