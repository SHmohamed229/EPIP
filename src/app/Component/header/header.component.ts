import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/model/utils/language';
import { LanguageService } from 'src/app/services/language.service';


interface language {
    name: any,
    code: any,
    resource: any
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
languages! : Language[];
// selectedlanguage! : Language;
selectedlanguage! : language;
selectLang! : language[]
  constructor(    private languageServices : LanguageService,
                  private  translate: TranslateService) {

                    this.selectLang = [
                      {name: 'English', code: 'en',resource: 'logo-en.png'},
                      {name: 'عربي', code: 'ar',resource: 'logo-ar.png'},
                    ];
                  }

  ngOnInit(): void {
    this.languageServices.getAllLanguages().subscribe({
      next: (values: Language[]) =>{
        this.languages = values;
      }
    });
    
    this.translate.setDefaultLang('en');
  }

  changeSiteLanguage(languageEvent : any){
    this.translate.use(languageEvent.code)
  }

  filter(queryString : string){
    
  }
}
