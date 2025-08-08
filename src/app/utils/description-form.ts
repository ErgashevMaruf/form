import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MultiLanguageForm } from '../model/multilang';

export function createDescriptionForm() {
  return new FormGroup<MultiLanguageForm>({
    uz: new FormControl('', Validators.required),
    ru: new FormControl('', Validators.required),
    en: new FormControl('', Validators.required),
    kaa: new FormControl('', Validators.required),
  });
}
