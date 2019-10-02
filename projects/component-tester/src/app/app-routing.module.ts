import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertExampleComponent } from './alert-example/alert-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';


const routes: Routes = [
  { path: 'alert', component: AlertExampleComponent },
  { path: 'tooltip', component: TooltipExampleComponent },
  { path: 'carousel', component: CarouselExampleComponent },
  { path: '', redirectTo: '/alert', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
