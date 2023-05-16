export type ThemeType = "light" | "dark";
export type UnitType = "metric" | "imperial";

export interface SettingsModel {
  theme: ThemeType;
  unit: UnitType;
  currentLocation: string
}

export const defaultSettings: SettingsModel = {
  theme: "light",
  unit: "metric",
  currentLocation: ""
};
