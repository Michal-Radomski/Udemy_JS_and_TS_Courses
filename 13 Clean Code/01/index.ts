//* https://dev.to/favourmark05/writing-clean-code-best-practices-and-principles-3amh
//* https://www.freecodecamp.org/news/how-to-write-clean-code
//* https://devszczepaniak.pl/solid-kiss-i-dry/

//@ Naming
//* Names should be meaningful
class User {
  save() {}
}

const isLoggedIn = true;

const user = new User();
user.save();

if (isLoggedIn) {
  // ...
}

//*  Exceptions
class Database {
  private client: any;

  get connectedClient() {
    if (!this.client) {
      throw new Error("Database not connected!");
    }
    return this.client;
  }

  connect() {
    // Establishing connection ...
    this.client = {};
  }
}

const db = new Database();
db.connectedClient.query();
