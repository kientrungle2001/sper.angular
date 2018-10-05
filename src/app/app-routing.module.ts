import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SperPageServiceDetailComponent } from './pages/sper/service/detail/detail.component';
import { SperPageHomeComponent } from './pages/sper/home/home.component';
import { SperPageBlogComponent } from './pages/sper/blog/blog.component';
import { SperPageBlogDetailComponent } from './pages/sper/blog/detail/detail.component';
import { SperPageNewsComponent } from './pages/sper/news/news.component';
import { SperPageNewsDetailComponent } from './pages/sper/news/detail/detail.component';

const routes: Routes = [
  { path: '', component: SperPageHomeComponent },
  { path: 'service/detail', component: SperPageServiceDetailComponent },
  { path: 'blog', component: SperPageBlogComponent },
  { path: 'blog/detail', component: SperPageBlogDetailComponent },
  { path: 'news', component: SperPageNewsComponent },
  { path: 'news/detail', component: SperPageNewsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
