export enum Languages {
  ENGLISH = 'en',
  UZBEK = 'uz',
  RUSSIAN = 'ru',
  KARAKALPAK = 'kaa',
}
export const DefaultLanguage = Languages.UZBEK;

import { FormControl } from '@angular/forms';

export type MultiLanguageForm = {
  [K in Languages]: FormControl<string | null>;
};
