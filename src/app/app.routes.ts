import { itensModule } from './courses/itens.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'itens'  },
  { path: 'itens',
    loadChildren: () => import('./courses/itens.module').then(m => m.itensModule)
  }
];
