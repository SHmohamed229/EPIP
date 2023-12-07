import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PersonComponent } from '../../modules/person/person.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
// import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
    declarations: [
        DefaultComponent,
        DashboardComponent,
        PersonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        // FlexLayoutModule
        MatListModule
    ],
    exports:[

    ]
})
export class DefaultModule { }
