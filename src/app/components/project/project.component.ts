import { Component, Input } from '@angular/core';
import { ProjectModel } from 'src/app/models/projectModel';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() project: ProjectModel ={
    id:0,
    name:'',
    htmlUrl:'',
    description:'',
    topics:[]
  }




}
