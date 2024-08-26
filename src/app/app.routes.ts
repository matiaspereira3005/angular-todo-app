import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
    {
        path: '', component:DefaultComponent,
        children:[{ path:'', component:LoginComponent }],
    },
    {
        path: '', component:DefaultComponent,
        children:[{ path:'todo', component:TodoComponent }],
    },
];
