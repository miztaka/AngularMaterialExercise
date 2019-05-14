import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class EnvironmentModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EnvironmentModule
    };
  }
}

export const environment = {
  production: true,
  apiBase: 'http://localhost:8080/api/v1',
  clientId: '214245964567-bppuvom584fat50fa27tlsf1dnbgeiqm.apps.googleusercontent.com'
};
