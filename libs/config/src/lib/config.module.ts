import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppConfig } from '@starter/ui-types';

import { FUSE_APP_CONFIG } from './config.constants';
import { FuseConfigService } from './config.service';

@NgModule({
  providers: [FuseConfigService],
})
export class FuseConfigModule {
  /**
   * forRoot method for setting user configuration
   *
   * @param config
   */
  static forRoot(config: AppConfig): ModuleWithProviders<FuseConfigModule> {
    return {
      ngModule: FuseConfigModule,
      providers: [
        {
          provide: FUSE_APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
