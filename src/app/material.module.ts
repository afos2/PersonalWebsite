import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    exports: [
        MatToolbarModule, 
        MatButtonModule, 
        MatTabsModule,
        MatButtonToggleModule,
        MatDividerModule
    ]
})
export class MaterialModule {}