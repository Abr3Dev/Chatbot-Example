import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSentenceComponent } from './components/create-sentence/create-sentence.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path : '', component : MainComponent},
  {path : 'test', component : MainComponent},
  {path : 'create', component : CreateSentenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
