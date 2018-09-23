import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { AuthGuard } from './auth-guard.service';

export const AppRoutes: Routes = [
    { path: '', component:GoogleLoginComponent , pathMatch: 'full'  },
    { path: 'login', component:GoogleLoginComponent , pathMatch: 'full'  },
    { path: 'dashboard', component: DashboardComponent , pathMatch: 'full', canActivate: [AuthGuard]},
    { path: '**', component:GoogleLoginComponent , pathMatch: 'full'  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);