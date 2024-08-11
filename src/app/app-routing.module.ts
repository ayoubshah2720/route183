import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: () => import('../app/components/about/about.module').then(m => m.AboutModule) },
  { path: 'services', loadChildren: () => import('../app/components/services/services.module').then(m => m.ServicesModule) },
  { path: 'properties', loadChildren: () => import('../app/components/properties/properties.module').then(m => m.PropertiesModule) },
  { path: 'agent', loadChildren: () => import('../app/components/agent/agent.module').then(m => m.AgentModule) },
  { path: 'blogs', loadChildren: () => import('../app/components/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'settlements', loadChildren: () => import('../app/components/settlements/settlements.module').then(m => m.SettlementsModule) },
  { path: 'news', loadChildren: () => import('../app/components/news/news.module').then(m => m.NewsModule) },
  { path: 'contact', loadChildren: () => import('../app/components/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
