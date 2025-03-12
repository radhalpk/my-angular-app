import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RenderMode } from '@angular/ssr'; // Import RenderMode

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    
  },
  { 
    path: 'home', 
    component: HomeComponent,
    
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    
  },
  { 
    path: 'about', 
    component: AboutComponent,
    
  },
];

// Export the routes as serverRoutes
export const serverRoutes = routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
