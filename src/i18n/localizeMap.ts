import * as cs from './cs.json';
import * as de from './de.json';
import * as el from './el.json';
import * as es from './es.json';
import * as es419 from './es-419.json';
import * as fr from './fr.json';
import * as it from './it.json';
import * as ja from './ja.json';
import * as ko from './ko.json';
import * as nl from './nl.json';
import * as pl from './pl.json';
import * as pt from './pt.json';
import * as ptBr from './pt-br.json';
import * as ro from './ro.json';
import * as ru from './ru.json';
import * as sv from './sv.json';
import * as tr from './tr.json';
import * as uk from './uk.json';
import * as zhCn from './zh-cn.json';
import * as zhTw from './zh-tw.json';
import * as en from './en.json';

export const localizeMap = {
  en: {
    name: 'English',
    strings: en,
    credit: []
  },
  cs: {
    name: 'Čeština',
    strings: cs,
    credit: [],
  },
  de: {
    name: 'Deutsch',
    strings: de,
    credit: [],
  },
  el: {
    name: 'Ελληνικά',
    strings: el,
    credit: [],
  },
  es: {
    name: 'Español-España',
    strings: es,
    credit: [],
  },
  'es-419': {
    name: 'Español-Latinoamérica',
    strings: es419,
    credit: [],
  },
  fr: {
    name: 'Français',
    strings: fr,
    credit: [],
  },
  it: {
    name: 'Italiano',
    strings: it,
    credit: [],
  },
  ja: {
    name: '日本語',
    strings: ja,
    credit: [],
  },
  ko: {
    name: '한국어',
    strings: ko,
    credit: [],
  },
  nl: {
    name: 'Nederlands',
    strings: nl,
    credit: [],
  },
  pl: {
    name: 'Polski',
    strings: pl,
    credit: [],
  },
  pt: {
    name: 'Português',
    strings: pt,
    credit: [],
  },
  'pt-br': {
    name: 'Português-Brasil',
    strings: ptBr,
    credit: [],
  },
  ro: {
    name: 'Română',
    strings: ro,
    credit: [],
  },
  ru: {
    name: 'Русский',
    strings: ru,
    credit: [],
  },
  sv: {
    name: 'Svenska',
    strings: sv,
    credit: [],
  },
  tr: {
    name: 'Türkçe',
    strings: tr,
    credit: [],
  },
  uk: {
    name: 'Українська',
    strings: uk,
    credit: [],
  },
  'zh-cn': {
    name: '简体中文',
    strings: zhCn,
    credit: [],
  },
  'sc-sc': {
    name: '简体中文',
    strings: zhCn,
    credit: [],
  },
  'zh-tw': {
    name: '正體中文',
    strings: zhTw,
    credit: [],
  },
//  th: {
//    name: 'ไทย',
//    strings: th,
//    credit: []
//  },
//  da: {
//    name: 'Dansk',
//    strings: da,
//    credit: []
//  },
//  fi: {
//    name: 'Suomi',
//    strings: fi,
//    credit: []
//  },
//  no: {
//    name: 'Norsk',
//    strings: no,
//    credit: []
//  },
//  hu: {
//    name: 'Magyar',
//    strings: hu,
//    credit: []
//  },
  //  bg: {
  //    name: 'български език',
  //    strings: bg,
  //    credit: []
  //  },
//  vn: {
//    name: 'Tiếng Việt',
//    strings: vn,
//    credit: []
//  },
};
export enum localizeStrEnum {
  MANGOINDEX_LABEL = "MANGOINDEX_LABEL",
  MANGOINDEX_LABEL_CLOSE = "MANGOINDEX_LABEL_CLOSE",
  RESET_PARAM_DEFAULT = "RESET_PARAM_DEFAULT",
  PARAM_MANUALLY_SORT_TITLE = "PARAM_MANUALLY_SORT_TITLE",
  LEGACY_LAYOUT_LABEL = "LEGACY_LAYOUT_LABEL",
  LEGACY_LAYOUT_DESCRIPTION = "LEGACY_LAYOUT_DESCRIPTION",
  HORIZONTAL_LABEL = "HORIZONTAL_LABEL",
  HORIZONTAL_DESCRIPTION = "HORIZONTAL_DESCRIPTION",
  TABLE_COLUMNS_LABEL = "TABLE_COLUMNS_LABEL",
  TABLE_COLUMNS_DESCRIPTION = "TABLE_COLUMNS_DESCRIPTION",
  WIDTH_LABLE = "WIDTH_LABLE",
  WIDTH_DESCRIPTION = "WIDTH_DESCRIPTION",
  POSITION_LABEL = "POSITION_LABEL",
  POSITION_DESCRIPTION = "POSITION_DESCRIPTION",
  HUD_NO_MARGIN_LABEL = "HUD_NO_MARGIN_LABEL",
  HUD_NO_MARGIN_DESCRIPTION = "HUD_NO_MARGIN_DESCRIPTION",
  OFFSET_X_LABEL = "OFFSET_X_LABEL",
  OFFSET_Y_LABEL = "OFFSET_Y_LABEL",
  FPS_ONLY_LABEL = "FPS_ONLY_LABEL",
  NO_DISPLAY_LABEL = "NO_DISPLAY_LABEL",
  ALPHA_LABEL = "ALPHA_LABEL",
  ALPHA_DESCRIPTION = "ALPHA_DESCRIPTION",
  BACKGROUND_ALPHA_LABEL = "BACKGROUND_ALPHA_LABEL",
  BACKGROUND_ALPHA_DESCRIPTION = "BACKGROUND_ALPHA_DESCRIPTION",
  FONT_SCALE_LABEL = "FONT_SCALE_LABEL",
  FULL_LABEL = "FULL_LABEL",
  FULL_DESCRIPTION = "FULL_DESCRIPTION",
  CUSTOM_TEXT_CENTER_LABEL = "CUSTOM_TEXT_CENTER_LABEL",
  CUSTOM_TEXT_CENTER_DESCRIPTION = "CUSTOM_TEXT_CENTER_DESCRIPTION",
  CUSTOM_TEXT_LABEL = "CUSTOM_TEXT_LABEL",
  CUSTOM_TEXT_DESCRIPTION = "CUSTOM_TEXT_DESCRIPTION",
  TIME_LABEL = "TIME_LABEL",
  TIME_DESCRIPTION = "TIME_DESCRIPTION",
  VERSION_LABEL = "VERSION_LABEL",
  VERSION_DESCRIPTION = "VERSION_DESCRIPTION",
  CPU_STATS_LABEL = "CPU_STATS_LABEL",
  CPU_TEXT_LABEL = "CPU_TEXT_LABEL",
  CPU_TEXT_DESCRIPTION = "CPU_TEXT_DESCRIPTION",
  CPU_LOAD_CHANGE_LABEL = "CPU_LOAD_CHANGE_LABEL",
  CPU_LOAD_CHANGE_DESCRIPTION = "CPU_LOAD_CHANGE_DESCRIPTION",
  CORE_LOAD_LABEL = "CORE_LOAD_LABEL",
  CORE_LOAD_DESCRIPTION = "CORE_LOAD_DESCRIPTION",
  CORE_LOAD_CHANGE_LABEL = "CORE_LOAD_CHANGE_LABEL",
  CORE_LOAD_CHANGE_DESCRIPTION = "CORE_LOAD_CHANGE_DESCRIPTION",
  CPU_MHZ_LABEL = "CPU_MHZ_LABEL",
  CPU_MHZ_DESCRIPTION = "CPU_MHZ_DESCRIPTION",
  CPU_POWER_LABEL = "CPU_POWER_LABEL",
  CPU_POWER_DESCRIPTION = "CPU_POWER_DESCRIPTION",
  CPU_TEMP_LABEL = "CPU_TEMP_LABEL",
  CPU_TEMP_DESCRIPTION = "CPU_TEMP_DESCRIPTION",
  GPU_STATS_LABEL = "GPU_STATS_LABEL",
  GPU_TEXT_LABEL = "GPU_TEXT_LABEL",
  GPU_TEXT_DESCRIPTION = "GPU_TEXT_DESCRIPTION",
  GPU_LOAD_CHANGE_LABEL = "GPU_LOAD_CHANGE_LABEL",
  GPU_LOAD_CHANGE_DESCRIPTION = "GPU_LOAD_CHANGE_DESCRIPTION",
  GPU_CORE_CLOCK_LABEL = "GPU_CORE_CLOCK_LABEL",
  GPU_CORE_CLOCK_DESCRIPTION = "GPU_CORE_CLOCK_DESCRIPTION",
  GPU_POWER_LABEL = "GPU_POWER_LABEL",
  GPU_POWER_DESCRIPTION = "GPU_POWER_DESCRIPTION",
  GPU_TEMP_LABEL = "GPU_TEMP_LABEL",
  GPU_TEMP_DESCRIPTION = "GPU_TEMP_DESCRIPTION",
  VRAM_LABEL = "VRAM_LABEL",
  VRAM_DESCRIPTION = "VRAM_DESCRIPTION",
  RAM_LABEL = "RAM_LABEL",
  RAM_DESCRIPTION = "RAM_DESCRIPTION",
  SWAP_LABEL = "SWAP_LABEL",
  SWAP_DESCRIPTION = "SWAP_DESCRIPTION",
  BATTERY_LABEL = "BATTERY_LABEL",
  BATTERY_DESCRIPTION = "BATTERY_DESCRIPTION",
  BATTERY_ICON_LABEL = "BATTERY_ICON_LABEL",
  BATTERY_ICON_DESCRIPTION = "BATTERY_ICON_DESCRIPTION",
  FAN_LABEL = "FAN_LABEL",
  FAN_DESCRIPTION = "FAN_DESCRIPTION",
  FSR_LABEL = "FSR_LABEL",
  FSR_DESCRIPTION = "FSR_DESCRIPTION",
  FPS_LABEL = "FPS_LABEL",
  FPS_DESCRIPTION = "FPS_DESCRIPTION",
  FPS_COLOR_CHANGE_LABEL = "FPS_COLOR_CHANGE_LABEL",
  FPS_COLOR_CHANGE_DESCRIPTION = "FPS_COLOR_CHANGE_DESCRIPTION",
  FRAME_TIMING_LABEL = "FRAME_TIMING_LABEL",
  FRAME_TIMING_DESCRIPTION = "FRAME_TIMING_DESCRIPTION",
  FRAME_COUNT_LABEL = "FRAME_COUNT_LABEL",
  FRAME_COUNT_DESCRIPTION = "FRAME_COUNT_DESCRIPTION",
  FRAME_TIME_LABEL = "FRAME_TIME_LABEL",
  FRAME_TIME_DESCRIPTION = "FRAME_TIME_DESCRIPTION",
  TIME_FORMAT_LABEL = "TIME_FORMAT_LABEL",
  TIME_FORMAT_DESCRIPTION = "TIME_FORMAT_DESCRIPTION",
  TIME_FORMAT_INPUT_TITLE = "TIME_FORMAT_INPUT_TITLE",
  TIME_FORMAT_INPUT_DESCRIPTION1 = "TIME_FORMAT_INPUT_DESCRIPTION1",
  TIME_FORMAT_INPUT_DESCRIPTION2 = "TIME_FORMAT_INPUT_DESCRIPTION2",
  TIME_FORMAT_INPUT_DESCRIPTION3 = "TIME_FORMAT_INPUT_DESCRIPTION3",
  TIME_FORMAT_INPUT_DESCRIPTION4 = "TIME_FORMAT_INPUT_DESCRIPTION4",
  BATTERY_WATT_LABEL = "BATTERY_WATT_LABEL",
  BATTERY_WATT_DESCRIPTION = "BATTERY_WATT_DESCRIPTION",
  BATTERY_TIME_LABEL = "BATTERY_TIME_LABEL",
  BATTERY_TIME_DESCRIPTION = "BATTERY_TIME_DESCRIPTION",
  RESORT_SELECT_DESCRIPTION = "RESORT_SELECT_DESCRIPTION",
  RESORT_END_DESCRIPTION = "RESORT_END_DESCRIPTION",
  RESORT_MOVEUP_DESCRIPTION = "RESORT_MOVEUP_DESCRIPTION",
  RESORT_MOVEDOWN_DESCRIPTION = "RESORT_MOVEDOWN_DESCRIPTION",
  DEBUG_LABEL = "DEBUG_LABEL",
  DEBUG_DESCRIPTION = "DEBUG_DESCRIPTION",
  PRESET_LABEL = "PRESET_LABEL",
  PRESET_DESCRIPTION = "PRESET_DESCRIPTION",
  GPU_MEM_LABEL = "GPU_MEM_LABEL",
  GPU_MEM_DESCRIPTION = "GPU_MEM_DESCRIPTION",
  ARCH_LABEL = "ARCH_LABEL",
  ARCH_DESCRIPTION = "ARCH_DESCRIPTION",
  ENGINE_VERSION_LABEL = "ENGINE_VERSION_LABEL",
  ENGINE_VERSION_DESCRIPTION = "ENGINE_VERSION_DESCRIPTION",
  GAMEMODE_LABEL = "GAMEMODE_LABEL",
  GAMEMODE_DESCRIPTION = "GAMEMODE_DESCRIPTION",
  VKBASALT_LABEL = "VKBASALT_LABEL",
  VKBASALT_DESCRIPTION = "VKBASALT_DESCRIPTION",
  SHOW_FPS_LIMIT_LABEL = "SHOW_FPS_LIMIT_LABEL",
  SHOW_FPS_LIMIT_DESCRIPTION = "SHOW_FPS_LIMIT_DESCRIPTION",
  RESOLUTION_LABEL = "RESOLUTION_LABEL",
  RESOLUTION_DESCRIPTION = "RESOLUTION_DESCRIPTION",
  IO_WRITE_LABEL = "IO_WRITE_LABEL",
  IO_WRITE_DESCRIPTION = "IO_WRITE_DESCRIPTION",
  IO_READ_LABEL = "IO_READ_LABEL",
  IO_READ_DESCRIPTION = "IO_READ_DESCRIPTION",
  FPS_LIMIT_LABEL = "FPS_LIMIT_LABEL",
  FPS_LIMIT_DESCRIPTION = "FPS_LIMIT_DESCRIPTION",
  FPS_LIMIT_METHOD_LABEL = "FPS_LIMIT_METHOD_LABEL",
  FPS_LIMIT_METHOD_DESCRIPTION = "FPS_LIMIT_METHOD_DESCRIPTION",
  PROCMEM_LABEL = "PROCMEM_LABEL",
  PROCMEM_DESCRIPTION = "PROCMEM_DESCRIPTION",
  PROCMEM_SHARED_LABEL = "PROCMEM_SHARED_LABEL",
  PROCMEM_SHARED_DESCRIPTION = "PROCMEM_SHARED_DESCRIPTION",
  PROCMEM_VIRT_LABEL = "PROCMEM_VIRT_LABEL",
  PROCMEM_VIRT_DESCRIPTION = "PROCMEM_VIRT_DESCRIPTION",
  HIDE_FSR_SHARPNESS_LABEL = "HIDE_FSR_SHARPNESS_LABEL",
  HIDE_FSR_SHARPNESS_DESCRIPTION = "HIDE_FSR_SHARPNESS_DESCRIPTION",
  HISTOGRAM_LABEL = "HISTOGRAM_LABEL",
  HISTOGRAM_DESCRIPTION = "HISTOGRAM_DESCRIPTION",
  OFFSET_X_DESCRIPTION = "OFFSET_X_DESCRIPTION",
  OFFSET_Y_DESCRIPTION = "OFFSET_Y_DESCRIPTION",
  GRAPHS_CPU_LOAD_LABEL = "GRAPHS_CPU_LOAD_LABEL",
  GRAPHS_CPU_LOAD_DESCRIPTION = "GRAPHS_CPU_LOAD_DESCRIPTION",
  GRAPHS_CPU_TEMP_LABEL = "GRAPHS_CPU_TEMP_LABEL",
  GRAPHS_CPU_TEMP_DESCRIPTION = "GRAPHS_CPU_TEMP_DESCRIPTION",
  GRAPHS_GPU_LOAD_LABEL = "GRAPHS_GPU_LOAD_LABEL",
  GRAPHS_GPU_LOAD_DESCRIPTION = "GRAPHS_GPU_LOAD_DESCRIPTION",
  GRAPHS_GPU_CORE_CLOCK_LABEL = "GRAPHS_GPU_CORE_CLOCK_LABEL",
  GRAPHS_GPU_CORE_CLOCK_DESCRIPTION = "GRAPHS_GPU_CORE_CLOCK_DESCRIPTION",
  GRAPHS_GPU_TEMP_LABEL = "GRAPHS_GPU_TEMP_LABEL",
  GRAPHS_GPU_TEMP_DESCRIPTION = "GRAPHS_GPU_TEMP_DESCRIPTION",
  GRAPHS_RAM_LABEL = "GRAPHS_RAM_LABEL",
  GRAPHS_RAM_DESCRIPTION = "GRAPHS_RAM_DESCRIPTION",
  GRAPHS_VRAM_LABEL = "GRAPHS_VRAM_LABEL",
  GRAPHS_VRAM_DESCRIPTION = "GRAPHS_VRAM_DESCRIPTION",
  GRAPHS_GPU_MEM_CLOCK_LABEL = "GRAPHS_GPU_MEM_CLOCK_LABEL",
  GRAPHS_GPU_MEM_CLOCK_DESCRIPTION = "GRAPHS_GPU_MEM_CLOCK_DESCRIPTION",
  TEXT_OUTLINE_THICKNESS_LABEL = "TEXT_OUTLINE_THICKNESS_LABEL",
  BACKGROUND_COLOR_LABEL = "BACKGROUND_COLOR_LABEL",
  BACKGROUND_COLOR_DESCRIPTION = "BACKGROUND_COLOR_DESCRIPTION",
  TEXT_COLOR_LABEL = "TEXT_COLOR_LABEL",
  TEXT_COLOR_DESCRIPTION = "TEXT_COLOR_DESCRIPTION",
  CPU_COLOR_LABEL = "CPU_COLOR_LABEL",
  CPU_COLOR_DESCRIPTION = "CPU_COLOR_DESCRIPTION",
  GPU_COLOR_LABEL = "GPU_COLOR_LABEL",
  GPU_COLOR_DESCRIPTION = "GPU_COLOR_DESCRIPTION",
  RAM_COLOR_LABEL = "RAM_COLOR_LABEL",
  RAM_COLOR_DESCRIPTION = "RAM_COLOR_DESCRIPTION",
  VRAM_COLOR_LABEL = "VRAM_COLOR_LABEL",
  VRAM_COLOR_DESCRIPTION = "VRAM_COLOR_DESCRIPTION",
  BATTERY_COLOR_LABEL = "BATTERY_COLOR_LABEL",
  BATTERY_COLOR_DESCRIPTION = "BATTERY_COLOR_DESCRIPTION",
  ENGINE_COLOR_LABEL = "ENGINE_COLOR_LABEL",
  ENGINE_COLOR_DESCRIPTION = "ENGINE_COLOR_DESCRIPTION",
  IO_COLOR_LABEL = "IO_COLOR_LABEL",
  IO_COLOR_DESCRIPTION = "IO_COLOR_DESCRIPTION",
  TEXT_OUTLINE_THICKNESS_DESCRIPTION = "TEXT_OUTLINE_THICKNESS_DESCRIPTION",
  TEXT_OUTLINE_COLOR_LABEL = "TEXT_OUTLINE_COLOR_LABEL",
  TEXT_OUTLINE_COLOR_DESCRIPTION = "TEXT_OUTLINE_COLOR_DESCRIPTION",
  FRAMETIME_COLOR_LABEL = "FRAMETIME_COLOR_LABEL",
  FRAMETIME_COLOR_DESCRIPTION = "FRAMETIME_COLOR_DESCRIPTION",
  USE_PERAPP_CONFIG_LABEL = "USE_PERAPP_CONFIG_LABEL",
  USING = "USING",
  DEFAULT = "DEFAULT",
  MANGOLEVEL = "MANGOLEVEL",
  HDR_LABEL = "HDR_LABEL",
  HDR_DESCRIPTION = "HDR_DESCRIPTION",
  REFRESH_RATE_LABEL = "REFRESH_RATE_LABEL",
  REFRESH_RATE_DESCRIPTION = "REFRESH_RATE_DESCRIPTION",
  GPU_VOLTAGE_LABEL = "GPU_VOLTAGE_LABEL",
  GPU_VOLTAGE_DESCRIPTION = "GPU_VOLTAGE_DESCRIPTION"
}
    