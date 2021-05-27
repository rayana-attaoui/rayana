import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HorreurComponent } from './horreur/horreur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RomantiqueComponent } from './romantique/romantique.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
  },
  {
    path:'home',
    component:HomeComponent,

  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'romantique',
    component:RomantiqueComponent
  },
  {
    path:'horreur',
    component:HorreurComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
