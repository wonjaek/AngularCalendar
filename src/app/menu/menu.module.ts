import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule ({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent,FooterComponent]
})
export class MenuModule { 
    constructor( @Optional() @SkipSelf() parentModule: MenuModule ) {
        if (parentModule) {
            throw new Error('Already Loaded MenuModule');
        }
    }
}