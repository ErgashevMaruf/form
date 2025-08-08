import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createDescriptionForm } from './description-form';
import { createDateForm } from './date-form';
import { createNameForm } from './name-form';

export function createStage() {
  return new FormGroup({
    name: createNameForm(),
    description: createDescriptionForm(),
    ...createDateForm(),
    type: new FormControl('', Validators.required),
    languageIds: new FormControl([], Validators.required),
    expertIds: new FormControl([], Validators.required),
    judgeIds: new FormControl([], Validators.required),
    schoolTypeIds: new FormControl([], Validators.required),
  });
}
