import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Translations = Record<string, unknown>;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = 'en';
  private translations: Record<string, Translations> = {};
  private langChangeSubject = new BehaviorSubject<string>(this.currentLang);
  private http = inject(HttpClient);
  
  public onLangChange = this.langChangeSubject.asObservable();

  constructor() {
    this.loadTranslations();
  }

  private loadTranslations() {
    // Load translations from JSON files
    const langs = ['en', 'fr', 'es'];
    
    langs.forEach(lang => {
      this.http.get<Translations>(`/assets/i18n/${lang}.json`).subscribe({
        next: (data) => {
          this.translations[lang] = data;
        },
        error: (err) => {
          console.error(`Failed to load translations for ${lang}:`, err);
        }
      });
    });
  }

  setDefaultLang(lang: string): void {
    this.currentLang = lang;
  }

  use(lang: string): void {
    this.currentLang = lang;
    this.langChangeSubject.next(lang);
  }

  get(key: string, lang?: string): string {
    const language = lang || this.currentLang;
    const keys = key.split('.');
    let value: Record<string, unknown> | string | undefined = this.translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k] as Record<string, unknown> | string;
      } else {
        value = undefined;
        break;
      }
    }
    
    return (typeof value === 'string' ? value : key);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  getBrowserLang(): string | undefined {
    if (typeof window !== 'undefined' && window.navigator) {
      return window.navigator.language.substring(0, 2);
    }
    return undefined;
  }
}