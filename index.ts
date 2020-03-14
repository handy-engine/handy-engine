export default class Engine {

  public name = ""

  constructor(name: string) {
    this.name = name;
    this.run();
  }

  run(): void {
    console.log('welcome handy engine!');
    console.log(`hello ${this.name}`);
  }
}

