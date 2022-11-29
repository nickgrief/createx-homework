import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ChartsComponent } from './charts/charts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
