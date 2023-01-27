import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRepoInfo } from 'git-repo-info';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectionGithubService {
  private urlApi = 'https://api.github.com/users/legt/repos';

  constructor(private http: HttpClient) {}

  getUserRepos() {
    return this.http.get(`https://api.github.com/users/legt14/repos`).pipe(
      map((item: any) =>
        item.map((p: any) => {
          return <GitRepoInfo>(<unknown>{
            id:p.id,
            name: p.name,
            htmlUrl: p.html_url,
            description: p.description,
            topics:p.topics
          });
        })
      )
    );
  }

  // getRepos(): Observable<GitRepoInfo> {
  //   console.log(this.urlApi);
  //   return this.http.get(this.urlApi)
  //   .pipe(
  //     map((data: any) => data.map(p => <GitRepoInfo>{
  // name: p.name,
  // stars: p.stargazers_count,
  // htmlUrl: p.html_url,
  // forks: p.forks,
  // description: p.description

  //     }) )
  //   );
  // }
}
