/* eslint-disable @angular-eslint/no-empty-lifecycle-method */

/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuillConfiguration } from './quill-configuration';

@Component({
  selector: 'starter-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
})
export class RichTextEditorComponent implements OnInit {
  constructor() {}

  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl = new FormControl('');

  ngOnInit() {}
}
