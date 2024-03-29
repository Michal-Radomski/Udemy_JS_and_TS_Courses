//* OOP Approach
function UserRecord(id) {
  if (this instanceof UserRecord) {
    this.userId = id;
    this.questions = [];
  } else {
    return new UserRecord(id);
  }
}

const userProto = {
  addQuestion: function (qID, response, result, weight) {
    this.questions.push({
      qID: qID,
      response: response,
      result: result,
      weight: weight,
    });
    this.updateScore();
  },
  get myScore() {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      let quest = this.questions[i];
      if (quest.result) {
        score += quest.weight;
      }
    }
    return score;
  },
  get possScore() {
    let possible = 0;
    for (let i = 0; i < this.questions.length; i++) {
      possible += this.questions[i].weight;
    }
    return possible;
  },
  updateScore: function () {
    console.log("this.userId:", this.userId);
  },
};

UserRecord.prototype = userProto;
UserRecord.prototype.constructor = UserRecord;

const user1 = new UserRecord(1);
user1.addQuestion("q1", "answer", true, 1);
user1.addQuestion("q2", "wrong answer", false, 2);

console.log("user1:", user1);
