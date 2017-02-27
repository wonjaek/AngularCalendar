import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule ({
    imports: [CommonModule],
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