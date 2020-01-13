import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatDividerModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule, MatGridListModule, MatDividerModule ],
    exports: [ MatButtonModule, MatCheckboxModule, MatGridListModule, MatDividerModule ],
})

export class MaterialModule {}
