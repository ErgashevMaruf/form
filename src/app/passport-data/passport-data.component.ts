import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

export type FunctionType<T = string | number | boolean> = (value?: T) => void;

@Component({
  selector: 'app-passport-data',
  imports: [FormsModule, InputTextModule],
  template: `
    <input
      type="text"
      class="w-[60px] uppercase"
      [(ngModel)]="passportSeria"
      [disabled]="isDisabled()"
      (input)="handePassportSeria($event)"
      pattern="[A-Za-z]{3}"
    />
    <input
      type="text"
      pInputText
      class="w-[100px]"
      [(ngModel)]="passportNumber"
      [disabled]="isDisabled()"
      (input)="changeData()"
    />
  `,
  styleUrl: './passport-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassportDataComponent),
      multi: true,
    },
  ],
})
export class PassportDataComponent implements ControlValueAccessor {
  cdr$ = inject(ChangeDetectorRef);

  onChange: FunctionType = () => {};

  onTouched: FunctionType = () => {};

  isDisabled = signal(false);

  passportSeria = signal('');

  passportNumber = signal('');

  handePassportSeria(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.passportSeria.set(value.substring(0, 2));
    this.cdr$.detectChanges();

    if (this.passportSeria()) {
      this.writeValue(this.passportSeria());
    }
  }

  changeData() {
    if (this.passportNumber() && this.passportSeria()) {
      const value = this.passportSeria().toUpperCase() + this.passportNumber();
      this.onChange(value);
    }
  }
  writeValue(value: string): void {
    if (value) {
      this.passportSeria.set(value.substring(0, 2));
      this.passportNumber.set(value.substring(2));
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
