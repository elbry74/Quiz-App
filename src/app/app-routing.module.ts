import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomePageComponent},
  {path:"question", component:QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
