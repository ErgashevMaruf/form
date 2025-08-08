import { Component, signal } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { AvatarModule } from 'primeng/avatar';
import { createDateForm } from './utils/date-form';
import { IBaseForm } from './model/base-form';
import { createDescriptionForm } from './utils/description-form';
import { createNameForm } from './utils/name-form';
import { SlidingBtn, SlidingBtnEvent } from './sliding-button/sliding-btn';
import { Languages } from './model/multilang';
import { DatePickerModule } from 'primeng/datepicker';
import { createStage } from './utils/stage-form';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-root',
  imports: [
    StepperModule,
    ButtonModule,
    ReactiveFormsModule,
    SelectModule,
    AvatarModule,
    SlidingBtn,
    DatePickerModule,
    EditorModule,
    InputTextModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  languages = Object.keys(Languages);

  title = 'form';

  activeLang = signal('en');

  olympCrudForm = new FormGroup<IBaseForm>({
    name: createNameForm(),
    description: createDescriptionForm(),
    ...createDateForm(),
    subjectId: new FormControl(null, Validators.required),
    studyYearId: new FormControl(null, Validators.required),
    organizerInstitutionId: new FormControl(null, Validators.required),
    type: new FormControl(1, Validators.required),
    schoolGradeId: new FormControl(null, Validators.required),
    stages: new FormArray<any>([]),
  });

  changeActive($event: SlidingBtnEvent) {
    this.activeLang.set(Languages[$event.name as keyof typeof Languages]);
  }
  addStage() {
    this.olympCrudForm.controls.stages.push(createStage());
  }
  removeStage(index: number) {
    this.olympCrudForm.controls.stages.removeAt(index);
  }
  submitForm() {}
}
