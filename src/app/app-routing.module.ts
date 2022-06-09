import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { ColorsComponent } from './views/colors/colors.component';
import { FormsComponent } from './views/forms/forms.component';
import { HomeComponent } from './views/home/home.component';
import { UtilitiesComponent } from './views/utilities/utilities.component';
import { YutesFileComponent } from './views/yutes-file/yutes-file.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'yutes',
    component: YutesFileComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
