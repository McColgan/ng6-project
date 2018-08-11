import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import components to route
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

// define all routes as an array of objects
const routes: Routes = [
  {
    // initial path when app loads
    path: '',
    // which component resides at that path
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
