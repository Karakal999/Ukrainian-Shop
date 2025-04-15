export type Language = "en" | "uk";

export interface BaseTranslations {
  [key: string]: string | Record<string, string | BaseTranslations>;
}

export interface TranslationModule<T> {
  en: T;
  uk: T;
}
