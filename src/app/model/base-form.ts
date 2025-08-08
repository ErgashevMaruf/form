import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MultiLanguageForm } from './multilang';

export interface IBaseForm {
  name: FormGroup<MultiLanguageForm>;
  description: FormGroup<MultiLanguageForm>;
  subjectId?: FormControl<number | null>;
  schoolGradeId?: FormControl<number | null>;
  studyYearId?: FormControl<number | null>;
  type?: FormControl<number | null>;
  organizerInstitutionId?: FormControl<number | null>;
  stages: FormArray<any>;
}
