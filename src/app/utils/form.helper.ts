import { inject } from '@angular/core';
import { ControlContainer } from '@angular/forms';

export function seeParentFormGroup() {
  return [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ];
}
