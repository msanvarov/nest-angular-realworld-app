import { bootstrapApplication } from '@angular/platform-browser';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'zone.js';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import './styles.scss';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
