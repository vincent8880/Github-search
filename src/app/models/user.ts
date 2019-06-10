export class User {
  constructor(
    public avatarUrl: string,
    public bio: string,
    public followers: number,
    public following: number,
    public htmlUrl: string,
    public login: string,
    public name: string,
    public publicRepos: number
  ) {}
}
