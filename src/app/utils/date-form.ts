import { FormControl, Validators } from '@angular/forms';
export function createDateForm() {
  return {
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    registrationStartDate: new FormControl('', Validators.required),
    registrationEndDate: new FormControl('', Validators.required),
  };
}
