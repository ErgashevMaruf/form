import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { SlidingBtn, SlidingBtnEvent } from '../sliding-button/sliding-btn';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { Languages } from '../model/multilang';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { IBaseForm } from '../model/base-form';
import { seeParentFormGroup } from '../utils/form.helper';

@Component({
  selector: 'app-name-and-description',
  imports: [SlidingBtn, EditorModule, InputTextModule, ReactiveFormsModule],
  template: `
    <app-sliding-btn
      [content]="content"
      [tabs]="languages"
      (changeActiveTab)="changeActive($event)"
    >
      <ng-template #content let-active>
        <form class="w-full my-6" formGroupName="name">
          <label for="name">{{ 'name' }}</label>
          <input
            [formControl]="$any(form.control?.get('name')?.get(activeLang()))"
            type="text"
            pInputText
            class="w-full"
          />
        </form>
        <form class="w-full" formGroupName="description">
          <label for="description">{{ 'description' }}</label>
          <p-editor
            [formControl]="
              $any(form.control?.get('description')?.get(activeLang()))
            "
          ></p-editor>
        </form>
      </ng-template>
    </app-sliding-btn>
  `,
  styleUrl: './name-and-description.component.css',

  changeDetection: ChangeDetectionStrategy.OnPush,

  viewProviders: seeParentFormGroup(),
})
export class NameAndDescriptionComponent {
  form = inject(ControlContainer);

  activeLang = signal('en');

  languages = Object.keys(Languages);

  changeActive($event: SlidingBtnEvent) {
    this.activeLang.set(Languages[$event.name as keyof typeof Languages]);
  }
}
