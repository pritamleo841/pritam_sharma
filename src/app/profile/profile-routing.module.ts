import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProfileComponent } from './profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:'about',
        component:IntroductionComponent
      },
      {
        path:'education',
        component:EducationComponent
      },
      {
        path:'experience',
        component:ExperienceComponent
      },
      {
        path:'skills',
        component:SkillsComponent
      },
      {
        path:'projects',
        component:ProjectsComponent
      },
      {
        path:'contacts',
        component:ContactComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
