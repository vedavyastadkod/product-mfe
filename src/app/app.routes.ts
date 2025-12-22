import { Routes } from '@angular/router';
import { App } from './app';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export const routes: Routes = [
    {
        path: '',
        component: App,
        providers: [],
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            {
                path: 'products',
                loadComponent: () => import('./products/products').then(m => m.Products)
            }
        ]
    },
];
