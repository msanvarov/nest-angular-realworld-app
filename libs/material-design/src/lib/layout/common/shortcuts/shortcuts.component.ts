import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatLegacyButton as MatButton } from '@angular/material/legacy-button';
import { Subject, takeUntil } from 'rxjs';

import { Shortcut } from '@starter/ui-types';

import { ShortcutsService } from './shortcuts.service';

@Component({
  selector: 'starter-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShortcutsComponent implements OnInit {
  @ViewChild('shortcutsOrigin') private _shortcutsOrigin?: MatButton;
  @ViewChild('shortcutsPanel') private _shortcutsPanel?: TemplateRef<any>;

  mode: 'view' | 'modify' | 'add' | 'edit' = 'view';
  shortcutForm: FormGroup = new FormGroup({});
  shortcuts: Shortcut[] = [];
  private _overlayRef?: OverlayRef;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private _shortcutsService: ShortcutsService,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Initialize the form
    this.shortcutForm = this._formBuilder.group({
      id: [null],
      label: ['', Validators.required],
      description: [''],
      icon: ['', Validators.required],
      link: ['', Validators.required],
      useRouter: ['', Validators.required],
    });

    // Get the shortcuts
    this._shortcutsService.shortcuts$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((shortcuts: Shortcut[]) => {
        // Load the shortcuts
        this.shortcuts = shortcuts;

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open the shortcuts panel
   */
  openPanel(): void {
    // Return if the shortcuts panel or its origin is not defined
    if (!this._shortcutsPanel || !this._shortcutsOrigin) {
      return;
    }

    // Make sure to start in 'view' mode
    this.mode = 'view';

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Attach the portal to the overlay
    this._overlayRef?.attach(
      new TemplatePortal(this._shortcutsPanel, this._viewContainerRef),
    );
  }

  /**
   * Close the shortcuts panel
   */
  closePanel(): void {
    this._overlayRef?.detach();
  }

  /**
   * Change the mode
   */
  changeMode(mode: 'view' | 'modify' | 'add' | 'edit'): void {
    // Change the mode
    this.mode = mode;
  }

  /**
   * Prepare for a new shortcut
   */
  newShortcut(): void {
    // Reset the form
    this.shortcutForm.reset();

    // Enter the add mode
    this.mode = 'add';
  }

  /**
   * Edit a shortcut
   */
  editShortcut(shortcut: Shortcut): void {
    // Reset the form with the shortcut
    this.shortcutForm.reset(shortcut);

    // Enter the edit mode
    this.mode = 'edit';
  }

  /**
   * Save shortcut
   */
  save(): void {
    // Get the data from the form
    const shortcut = this.shortcutForm.value;

    // If there is an id, update it...
    if (shortcut.id) {
      this._shortcutsService.update(shortcut.id, shortcut).subscribe();
    }
    // Otherwise, create a new shortcut...
    else {
      this._shortcutsService.create(shortcut).subscribe();
    }

    // Go back the modify mode
    this.mode = 'modify';
  }

  /**
   * Delete shortcut
   */
  delete(): void {
    // Get the data from the form
    const shortcut = this.shortcutForm.value;

    // Delete
    this._shortcutsService.delete(shortcut.id).subscribe();

    // Go back the modify mode
    this.mode = 'modify';
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'fuse-backdrop-on-mobile',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._shortcutsOrigin?._elementRef.nativeElement)
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]),
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef?.detach();
    });
  }
}
