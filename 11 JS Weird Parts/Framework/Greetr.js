// Save code
// Here can be a semicolon [;] at the beginning of the file
(function (global, $) {
  // 'New' an object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // Hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ["en", "es"];

  // Informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  // Formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  // Logger messages
  var logMessages = {
    en: "Logged in",
    es: "Inició sesión",
  };

  // Prototype holds methods (to save memory space)
  Greetr.prototype = {
    // 'This' refers to the calling object at execution time
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      // Check that is a valid language references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    // Retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    // Chainable methods return their own containing object
    greet: function (formal) {
      var msg;

      // If undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'This' refers to the calling object at execution time makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }

      // Make chainable
      return this;
    },

    setLang: function (lang) {
      // Set the language
      this.language = lang;
      // Validate
      this.validate();
      // Make chainable
      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }
      if (!selector) {
        throw "Missing jQuery selector";
      }
      // Determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      // Inject the message in the chosen place in the DOM
      $(selector).html(msg);
      // Make chainable
      return this;
    },
  };

  // The actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
    self.validate();
  };

  // Trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // Attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
