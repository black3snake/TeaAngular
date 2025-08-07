import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // searchQuery = ''
  constructor(private fb: FormBuilder) {
  }
  searchForm = this.fb.group({
    searchQuery: ['']
  })

  get searchQuery() {
    return this.searchForm.get('searchQuery');
  }
}
