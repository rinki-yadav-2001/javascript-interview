class SingleteonPAttern {
    constructor() {
      if (SingleteonPAttern.instance) {
        return SingleteonPAttern.instance;
      }
      this.data = "Singleton Data"; // Example property
      SingleteonPAttern.instance = this;
    }
  
    getData() {
      return this.data;
    }
  }
  
  const inst1 = new SingleteonPAttern();
  const inst2 = new SingleteonPAttern();
  console.log(inst1 === inst2);
  console.log(inst1.getData());