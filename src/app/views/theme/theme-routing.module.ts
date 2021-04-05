import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Setting'
    },
    children: [
      {
        path: '',
        redirectTo: 'users'
      },

      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
 

      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },

      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
