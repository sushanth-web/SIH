const questions = [
      { question: "What's your gender?", options: ["Male", "Female"], },
      { question: "What is your  highest form of education?", options: ["10th", "11th","12th"], },
      { question: "Are you confused of what course to choose?", options: ["Yes", "Probably","No"], },
      { question: "Are you already enrolled in a course?", options: ["Yes", "No"], },
      { question: "What is your age?", options: ["15+", "18+", "21+"], },
      { question: "Do you need career guidance?", options: ["Yes", "No"], },
      { question: "What is your location?", options: ["Vijayawada", "Ongole","Rajhumundary","Vishakapatnam"], },
      { question: "Do you need scholarship updates?", options: ["Yes", "Near me","No"], },
      { question: "what is your highest education percentage?", options: ["0% - 25%","25% - 50%", "50% - 75%", "75% -100%"], },
      { question: "Do you want to turn on notifications", options: ["All notifications", "Course related","Scholarship related","Disable notifications"], }
    ];

    const state = {
      current: 0,
      answers: Array(questions.length).fill(null),
    };

    function renderQuestion() {
      document.getElementById('question-num').textContent = state.current + 1;
      document.getElementById('total-questions').textContent = questions.length;
      document.getElementById('progress-bar').style.width =
        ((state.current + 1) / questions.length * 100) + '%';
      document.getElementById('progress-text').textContent =
        `${Math.round((state.current + 1) / questions.length * 100)}% Complete`;

      const q = questions[state.current];
      let html = `<div class="mb-4 text-lg font-semibold text-slate-800">${q.question}</div>`;
      q.options.forEach((opt, idx) => {
        html += `
          <label class="block mb-3 cursor-pointer">
            <input type="radio" name="answer" value="${idx}"
              class="hidden peer"
              ${state.answers[state.current] == idx ? "checked" : ""}>
            <div class="w-full px-4 py-3 rounded-xl border border-slate-200 peer-checked:border-sky-500 peer-checked:bg-gradient-to-r peer-checked:from-sky-100 peer-checked:to-cyan-100 peer-checked:text-sky-700 hover:bg-slate-50 transition shadow-sm">
              ${opt}
            </div>
          </label>
        `;
      });
      html += `
        <div class="flex justify-between mt-6">
          <button id="prev-btn"
            class="px-4 py-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm"
            ${state.current===0 ? "disabled" : ""}>Previous</button>
          <button id="next-btn"
            class="px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium shadow-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition"
            ${state.answers[state.current]===null ? "disabled" : ""}>${state.current === questions.length - 1 ? "Finish" : "Next"}</button>
        </div>
        <div class="text-center text-xs text-slate-500 mt-3">Select an answer to continue</div>
      `;
      document.getElementById('question-container').innerHTML = html;

      document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.onclick = () => {
          state.answers[state.current] = Number(input.value);
          document.getElementById('next-btn').disabled = false;
        };
      });

      document.getElementById('prev-btn').onclick = () => {
        if (state.current > 0) {
          state.current--;
          renderQuestion();
          renderQuickNav();
        }
      };

      document.getElementById('next-btn').onclick = () => {
        if (state.current < questions.length - 1) {
          state.current++;
          renderQuestion();
          renderQuickNav();
        } else {
          const score = state.answers.filter((a, i) => a === questions[i].correct).length;
          document.getElementById('question-container').innerHTML =
            `<div class="text-center py-6">
              <h2 class="text-3xl font-bold text-sky-700 mb-4">🌊 Quiz Complete!</h2>
              <p class="text-lg text-slate-700">Thank you.
              </p>
              <a href="home.html" >
                <button onclick="location.reload()" class="px-5 mt-5 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg shadow-lg hover:brightness-110 transition">
                  Home
                </button>
              </a>
            </div>`;
          document.getElementById('quick-nav').innerHTML = '';
        }
      };
    }

    function renderQuickNav() {
      const nav = document.getElementById('quick-nav');
      nav.innerHTML = '';
      for (let i = 0; i < questions.length; i++) {
        nav.innerHTML += `
          <button class="w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm border transition shadow-sm
            ${state.current===i
              ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-500 shadow-md"
              : "bg-white text-slate-700 border-slate-200 hover:bg-sky-50"}"
            onclick="state.current=${i};renderQuestion();renderQuickNav();">${i+1}</button>
        `;
      }
    }

    renderQuestion();
    renderQuickNav();