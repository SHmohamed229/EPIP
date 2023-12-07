import { Injectable } from '@angular/core';
import { Language } from '../model/utils/language';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private lngEnglish: Language = new Language('en' , 'English' , 'logo-en.png');
  private lngArabic: Language = new Language('ar' , 'عربي' , 'logo-ar.png');
  constructor() { }

  getAllLanguages() : Observable<Language[]> {
    const result : Observable<Language[]> = from([
      [
        this.lngEnglish,
        this.lngArabic,
      ]
    ]);
      return result;
  }
  getDefaultLanguage() :Language{
    return this.lngEnglish
  }
  getLanguageByCode(code : string) :Language{
    let result : any = null;

    if(code !== null){
      result = (code === 'en') ? this.lngEnglish : this.lngArabic;
    }
    return result;
  }
}
