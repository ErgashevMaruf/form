import { FormControl } from '@angular/forms';

export interface IDateForm {
  startDate: FormControl<string | null>;
  endDate: FormControl<string | null>;
  registrationStartDate: FormControl<string | null>;
  registrationEndDate: FormControl<string | null>;
}
