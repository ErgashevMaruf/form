import {
  Component,
  signal,
  input,
  TemplateRef,
  ChangeDetectionStrategy,
  output,
} from '@angular/core';
import { CommonModule, NgClass, NgTemplateOutlet } from '@angular/common';

export interface SlidingBtnEvent {
  name: string;
  index: number;
}

@Component({
  selector: 'app-sliding-btn',
  imports: [CommonModule, NgClass, NgTemplateOutlet],
  templateUrl: './sliding-btn.html',
  styleUrl: './sliding-btn.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidingBtn {
  active = signal<number>(0);

  changeActiveTab = output<SlidingBtnEvent>();

  styleClass = input('bg-[#EFF2FB]');

  tabs = input<string[]>([]);

  content = input<TemplateRef<any>>();

  changeActive(index: number) {
    this.active.set(index);
    this.changeActiveTab.emit({
      name: this.tabs()[index],
      index: index,
    });
  }
}
