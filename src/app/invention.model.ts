export class Invention {
  moneyRaised: number = 0;

  constructor(
    public projectName: string,
    public creators: string,
    public description: string,
    public rewards: string,
    public moneyGoal: number,
    public imgurl: string
  ) {}
}
