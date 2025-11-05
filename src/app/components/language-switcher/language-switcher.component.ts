import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  currentLang: string;
  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' }
  ];
  private translate = inject(TranslationService);

  constructor() {
    this.currentLang = this.translate.getCurrentLang();
    
    // Subscribe to language changes
    this.translate.onLangChange.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(langCode: string) {
    this.translate.use(langCode);
  }
}
