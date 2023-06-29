import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';

import { FUSE_APP_CONFIG } from './config.constants';

@Injectable({
  providedIn: 'root',
})
export class FuseConfigService {
  private _config: BehaviorSubject<any>;

  /**
   * Constructor
   */
  constructor(@Inject(FUSE_APP_CONFIG) config: any) {
    // Private
    this._config = new BehaviorSubject(config);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for config
   */
  set config(value: any) {
    // Merge the new config over to the current config
    const config = merge({} as any, this._config.getValue(), value);

    // Execute the observable
    this._config.next(config);
  }

  get config$(): Observable<any> {
    return this._config.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resets the config to the default
   */
  reset(): void {
    // Set the config
    this._config.next(this.config);
  }
}
