export enum ParamName {
  alpha = "alpha",
  background_alpha = "background_alpha",
  battery = "battery",
  battery_icon = "battery_icon",
  cpu_stats = "cpu_stats",
  core_load = "core_load",
  core_load_change = "core_load_change",
  cpu_load_change = "cpu_load_change",
  cpu_mhz = "cpu_mhz",
  cpu_power = "cpu_power",
  cpu_temp = "cpu_temp",
  cpu_text = "cpu_text",
  gpu_stats = "gpu_stats",
  gpu_load_change = "gpu_load_change",
  gpu_core_clock = "gpu_core_clock",
  gpu_mem_clock = "gpu_mem_clock",
  gpu_power = "gpu_power",
  gpu_temp = "gpu_temp",
  gpu_text = "gpu_text",
  legacy_layout = "legacy_layout",
  width = "width",
  offset_x = "offset_x",
  offset_y = "offset_y",
  fsr = "fsr",
  //io_stats="io_stats",
  io_read="io_read",
  io_write="io_write",
  ram = "ram",
  vram = "vram",
  swap = "swap",
  procmem="procmem",
  procmem_shared="procmem_shared",
  procmem_virt="procmem_virt",
  position = "position",
  fps = "fps",
  fps_only = "fps_only",
  fps_color_change = "fps_color_change",
  fan = "fan",
  no_display = "no_display",
  horizontal = "horizontal",
  hud_no_margin = "hud_no_margin",
  table_columns = "table_columns",
  arch="arch",
  gpu_name="gpu_name",
  wine="wine",
  frametime = "frametime",
  frame_timing = "frame_timing",
  frame_count = "frame_count",
  full = "full",
  font_scale = "font_scale",
  //no_small_font="no_small_font",
  custom_text_center = "custom_text_center",
  custom_text = "custom_text",
  time = "time",
  version = "version",
  time_format = "time_format",
  battery_watt = "battery_watt",
  battery_time = "battery_time",
  debug = "debug",
  preset = "preset",
  throttling_status = "throttling_status",
  throttling_status_graph = "throttling_status_graph",
  engine_version = "engine_version",
  gamemode = "gamemode",
  vkbasalt = "vkbasalt",
  show_fps_limit = "show_fps_limit",
  resolution = "resolution",
  fps_limit = "fps_limit",
  fps_limit_method = "fps_limit_method",
  hide_fsr_sharpness = "hide_fsr_sharpness",
  histogram = "histogram",
  graphs_cpu_load = "graphs_cpu_load",
  graphs_cpu_temp = "graphs_cpu_temp",
  graphs_gpu_load = "graphs_gpu_load",
  graphs_gpu_temp = "graphs_gpu_temp",
  graphs_gpu_core_clock = "graphs_gpu_core_clock",
  graphs_gpu_mem_clock = "graphs_gpu_mem_clock",
  graphs_vram = "graphs_vram",
  graphs_ram = "graphs_ram",
  text_outline_thickness = "text_outline_thickness",
  text_outline_color = "text_outline_color",
  cpu_color = "cpu_color",
  gpu_color = "gpu_color",
  text_color = "text_color",
  vram_color = "vram_color",
  ram_color = "ram_color",
  engine_color = "engine_color",
  io_color = "io_color",
  background_color = "background_color",
  battery_color = "battery_color",
  frametime_color = "frametime_color"
}

export enum ParamGroup{
    PRESET="PRESET",
    LAYOUT="LAYOUT",
    //SETTING="SETTING",
    CUSTOM_TEXT="TITLE",
    CPU="CPU",
    GPU="GPU",
    IO="IO",
    RAM="RAM",
    BATT="BATT",
    FPS="FPS",
    ENGINE="ENGINE",
    GRAPHS="GRAPHS",
    ALPHA="ALPHA",
    FONT="FONT",
    COLOR="COLOR",

}

export enum ParamPatchType{
    dropdown="dropdown",
    slider="slider",
    notchSlider="notchSlider",
    textInput="textInput",
    resortableList="resortableList",
    colorPicker="colorPicker",
    none="none"
}

export enum SteamChannel{
  rel="rel",
  main="main"
}

export enum ResortType{
  paramOrder="paramOrder",
}
