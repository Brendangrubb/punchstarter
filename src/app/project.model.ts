export class Project {
  moneyRaised: number = 0;
  backers: any = [];

  constructor(
    public projectName: string,
    public creators: string,
    public description: string,
    public rewards: string,
    public moneyGoal: number,
    public imgurl: string,
    public category: string
  ) {}
}
