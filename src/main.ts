import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppServerModule } from './app/app-server.module';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppServerModule)
  .catch(err => console.error(err));
