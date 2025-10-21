export type TemplateVariables = Record<string, string | number>;
export type Translations = {
  [key: string]: string | string[] | Object | Translations;
};
export type SupportedLanguages = "fr";
