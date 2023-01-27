import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/projectModel';
import { ConnectionGithubService } from 'src/app/services/connection-github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsList: ProjectModel[] = [];

  constructor(private connection: ConnectionGithubService) {}

  ngOnInit(): void {
    this.projects();
  }

  projects() {
    this.connection.getUserRepos().subscribe((data) => {
      data.map((record: ProjectModel) => {
        if (record.topics.find((word:string)=> word =='portfolio')) {
          const model: ProjectModel ={
            id:record.id,
            name:record.name,
            htmlUrl:record.htmlUrl,
            description:record.description,
            topics:record.topics
          }
          this.projectsList.push(model);
        }
      });
    });
  }
}
