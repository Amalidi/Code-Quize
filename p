<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,600;0,700;1,200&family=Poppins:ital,wght@0,400;1,100;1,800&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/e1eea166b2.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Code Quize</title>
  </head>
  <body>
    <!-- Navlinks section -->
    <header class="navbar-section">
      <nav>
        <a href="./index.html" class="navbarlink">Home</a>
        <a href="./highscores.html" class="navbarlink"> High score</a>
      </nav>
    </header>

    <!-- main section - first page -->
      <!-- countdown timer section -->
      <section class="start-section-container" id="banner-box">
        <h4 class="start-section-title">Start the quize challenge</h4>
        <h5 class="info-title">Click the start quiz button to begin!</h5>
        <div class="btn-control">
          <button class="begin-btn" id="start-btn">
            <i class="fas fa-stopwatch">Start quiz! </i>
          </button>
        </div>
      </section>

      <section class="timer-section" id="timer-box">
        <div class="top-section">
          <h5 class="title">Quiz Challenge</h5>
          <div class="timer">
            <div class="time-text">Time Left :</div>
            <div class="timer-sec" id="time-span">100</div>
          </div>
        </div>
      </section>

      <!-- questions section - use js  -->
      <!-- <section class="question-container" id="question-box">
        <div class="question-options">
          <h2 class="first-question">Question 1 : what is the xxx ?</h2>
          <ul class="list" id="option-list">
            <li class="btn-list-item" id="list-answer">1</li>
            <li class="btn-list-item" id="list-answer">2</li>
            <li class="btn-list-item" id="list-answer">3</li>
            <li class="btn-list-item" id="list-answer">4</li>
          </ul>
        </div>
      </section> -->

      <!-- form section dynamically rendered via JS -->
      <!-- <section class="feedback-form-section" name="feedback-form">
        <h2 class="title">Submit your feedback</h2>
        <form>
          <div class="form-control">
            <input
              name="full-name"
              class="form-input"
              type="text"
              placeholder="Enter full name"
            />
          </div>
          <div class="form-control">
            <button class="btn" type="submit">Submit</button>
          </div>
        </form>
      </section> -->
    </main>

    <!-- <footer>
      <h4 class="end">&copy; 2022 - Amal Idiris</h4>
      <div class="social">
        <a
          href="https://cdn.britannica.com/98/64798-050-D9201EB6/Birmingham-England.jpg"
          target="_blank"
          ><i class="fa fa-map-marker" aria-hidden="true"></i
        ></a>
        <a href="https://github.com/Amalidi" target="_blank"
          ><i class="fa fa-github"></i
        ></a>
        <a href="https://www.linkedin.com/in/a-i-idi-b86abb210/" target="_blank"
          ><i class="fa fa-linkedin"></i
        ></a>
      </div>
    </footer> -->
    <script src="./assets/script.js"></script>
  </body>
</html>
