import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatRadioModule, MatTooltipModule, MatChipsModule, MatProgressBarModule, MatSliderModule, MatAutocompleteModule, MatExpansionModule, MatIconModule, MatStepperModule, MatListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatInputModule, MatRadioModule, MatTooltipModule, MatChipsModule, MatProgressBarModule, MatSliderModule, MatAutocompleteModule, MatExpansionModule, MatIconModule, MatStepperModule, MatListModule],
})
export class MaterialModule{}
