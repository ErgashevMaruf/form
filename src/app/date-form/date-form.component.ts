import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { seeParentFormGroup } from '../utils/form.helper';

@Component({
  selector: 'app-date-form',
  imports: [DatePicker, ReactiveFormsModule],
  template: `
    <div class="w-full flex justify-between gap-6">
      <div class="w-full">
        <label for="startDate">{{ 'startDate' }}</label>
        <p-datepicker
          styleClass="w-full"
          formControlName="startDate"
        ></p-datepicker>
      </div>
      <div class="w-full">
        <label for="endDate">{{ 'endDate' }}</label>
        <p-datepicker
          styleClass="w-full"
          formControlName="endDate"
        ></p-datepicker>
      </div>
      <div class="w-full">
        <label for="registrationStartDate">{{ 'registrationStartDate' }}</label>
        <p-datepicker
          styleClass="w-full"
          formControlName="registrationStartDate"
        ></p-datepicker>
      </div>
      <div class="w-full">
        <label for="registrationEndDate">{{ 'registrationEndDate' }}</label>
        <p-datepicker
          styleClass="w-full"
          formControlName="registrationEndDate"
        ></p-datepicker>
      </div>
    </div>
  `,
  viewProviders: seeParentFormGroup(),

  styleUrl: './date-form.component.css',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFormComponent {}
