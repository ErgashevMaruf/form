import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { seeParentFormGroup } from '../utils/form.helper';

@Component({
  selector: 'app-select-info',
  templateUrl: './select-info.component.html',
  styleUrls: ['./select-info.component.css'],
  imports: [SelectModule, ReactiveFormsModule],
  viewProviders: seeParentFormGroup(),
})
export class SelectInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
