//@ Good comments example - generally avoid comments
// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

let sqlDriver: any;
let mongoDbDriver: any;

class DatabaseAdapter {
  private dbEngine: any;

  loadDatabaseDriver(engine: string) {
    if (engine === "sql") {
      this.dbEngine = sqlDriver;
    } else {
      this.dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.dbEngine.tryConnect();
  }

  insertData(data: any) {
    this.dbEngine.insert(data);
  }

  findOne(id: string) {
    // Todo: Needs to be implemented
  }
}

// Accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot
const emailRegex = /\S+@\S+\.\S+/;

// Only works in browser environment
localStorage.setItem("user", "test@test.com");
