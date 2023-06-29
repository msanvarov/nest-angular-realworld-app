import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { RouterModule } from '@angular/router';

import { FuseConfigModule } from '@starter/config';
import { FuseMediaWatcherModule } from '@starter/media-watcher';

import { FuseAlertComponent } from './alert/alert.component';
import { FuseAlertService } from './alert/alert.service';
import { FuseCardComponent } from './card/card.component';
import { FuseDrawerComponent, FuseDrawerService } from './drawer';
import {
  CenteredLayoutComponent,
  ClassicLayoutComponent,
  ClassyLayoutComponent,
  CompactLayoutComponent,
  DenseLayoutComponent,
  EmptyLayoutComponent,
  EnterpriseLayoutComponent,
  FuseFullscreenComponent,
  FuturisticLayoutComponent,
  LanguagesComponent,
  LayoutComponent,
  MaterialLayoutComponent,
  ModernLayoutComponent,
  NotificationsComponent,
  NotificationsService,
  SearchComponent,
  SettingsComponent,
  ShortcutsComponent,
  ShortcutsService,
  ThinLayoutComponent,
  UserComponent,
} from './layout';
import { FuseLoadingService, LoadingBarComponent } from './loading-bar';
import {
  FuseHorizontalNavigationBasicItemComponent,
  FuseHorizontalNavigationBranchItemComponent,
  FuseHorizontalNavigationComponent,
  FuseHorizontalNavigationDividerItemComponent,
  FuseHorizontalNavigationSpacerItemComponent,
  FuseNavigationService,
  FuseVerticalNavigationAsideItemComponent,
  FuseVerticalNavigationBasicItemComponent,
  FuseVerticalNavigationCollapsableItemComponent,
  FuseVerticalNavigationDividerItemComponent,
  FuseVerticalNavigationGroupItemComponent,
  FuseVerticalNavigationSpacerItemComponent,
  NavigationService,
} from './navigation';
import { FuseVerticalNavigationComponent } from './navigation/vertical/vertical.component';
import { FuseScrollbarDirective } from './scrollbar/scrollbar.directive';
import { FuseUtilsService } from './utils';

const matModules = [
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatBadgeModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
];

const customModules = [FuseConfigModule, FuseMediaWatcherModule];

const materialModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  ...matModules,
  ...customModules,
];

const providers = [
  FuseAlertService,
  FuseUtilsService,
  FuseLoadingService,
  NavigationService,
  FuseNavigationService,
  ShortcutsService,
  NotificationsService,
  FuseDrawerService,
];

const declarations = [
  LoadingBarComponent,
  FuseCardComponent,
  FuseAlertComponent,
  FuseHorizontalNavigationBasicItemComponent,
  FuseHorizontalNavigationBranchItemComponent,
  FuseHorizontalNavigationDividerItemComponent,
  FuseHorizontalNavigationSpacerItemComponent,
  FuseHorizontalNavigationComponent,
  FuseVerticalNavigationAsideItemComponent,
  FuseVerticalNavigationBasicItemComponent,
  FuseVerticalNavigationCollapsableItemComponent,
  FuseVerticalNavigationDividerItemComponent,
  FuseVerticalNavigationGroupItemComponent,
  FuseVerticalNavigationSpacerItemComponent,
  FuseVerticalNavigationComponent,
  FuseScrollbarDirective,
  FuseFullscreenComponent,
  // Layouts
  LayoutComponent,
  EmptyLayoutComponent,
  LanguagesComponent,
  SearchComponent,
  ShortcutsComponent,
  NotificationsComponent,
  UserComponent,
  SettingsComponent,
  FuseDrawerComponent,
  // Horizontal
  CenteredLayoutComponent,
  EnterpriseLayoutComponent,
  MaterialLayoutComponent,
  ModernLayoutComponent,
  // Vertical
  ClassicLayoutComponent,
  ClassyLayoutComponent,
  CompactLayoutComponent,
  DenseLayoutComponent,
  FuturisticLayoutComponent,
  ThinLayoutComponent,
];

@NgModule({
  imports: materialModules,
  declarations,
  providers,
  exports: declarations,
})
export class MaterialModule {}
