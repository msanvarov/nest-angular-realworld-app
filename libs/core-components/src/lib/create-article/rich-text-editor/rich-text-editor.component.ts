import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuillConfiguration } from './quill-configuration';

@Component({
  selector: 'starter-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
})
export class RichTextEditorComponent implements OnInit {
  constructor() {}

  quillConfiguration = QuillConfiguration;
  control = new FormControl();

  ngOnInit() {}
}
