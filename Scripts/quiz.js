const questions = [
  { category: 'Давня історія', question: 'Який острів зберігає пам’ятки різних історичних епох у серці Запорізького краю?', answers: ['Хортиця', 'Труханів острів', 'Березань', 'Зміїний острів'], correct: 0, detail: 'Хортиця — найбільший острів на Дніпрі та важливе історичне місце регіону.' },
  { category: 'Археологія', question: 'Яка пам’ятка поблизу Запоріжжя відома давніми петрогліфами та культовими слідами?', answers: ['Кам’яна Могила', 'Ольвія', 'Софія Київська', 'Почаївська лавра'], correct: 0, detail: 'Кам’яна Могила — визначна археологічна та природна пам’ятка Мелітопольщини.' },
  { category: 'Козацька доба', question: 'Як називали укріплений осередок запорозького козацтва?', answers: ['Запорозька Січ', 'Козацька паланка', 'Гетьманська столиця', 'Курінь'], correct: 0, detail: 'Запорозька Січ була військовим і самоврядним центром запорозького козацтва.' },
  { category: 'Козацькі традиції', question: 'Як називали легкі човни, які козаки використовували у походах Дніпром і Чорним морем?', answers: ['Чайки', 'Дуби', 'Галери', 'Струги'], correct: 0, detail: 'Чайки були швидкими козацькими човнами, придатними для річкових і морських походів.' },
  { category: 'Меноніти та колоністи', question: 'Яка релігійна громада заснувала численні колонії на запорізьких землях у XVIII столітті?', answers: ['Меноніти', 'Пуритани', 'Квакери', 'Єзуїти'], correct: 0, detail: 'Меноніти переселялися до Південної України й розвивали землеробство та ремесла.' },
  { category: 'Менонітська спадщина', question: 'У якій галузі особливо прославилися менонітські підприємці краю?', answers: ['Сільськогосподарське машинобудування', 'Кораблебудування', 'Видобуток бурштину', 'Шовкоткацтво'], correct: 0, detail: 'Менонітські майстерні та заводи стали відомими виробництвом сільськогосподарської техніки.' },
  { category: 'Індустріальне Запоріжжя', question: 'Як називався новий індустріальний район, що формувався поруч із ДніпроГЕСом?', answers: ['Соцмісто', 'Поділ', 'Печерськ', 'Новий Львів'], correct: 0, detail: 'Соцмісто будували як сучасний район для працівників промислового комплексу Запоріжжя.' },
  { category: 'ДніпроГЕС', question: 'Яку річку використовує Дніпровська гідроелектростанція?', answers: ['Дніпро', 'Десну', 'Південний Буг', 'Сіверський Донець'], correct: 0, detail: 'ДніпроГЕС побудована на Дніпрі й стала одним із символів індустріального Запоріжжя.' },
  { category: 'ДніпроГЕС', question: 'До якого типу електростанцій належить ДніпроГЕС?', answers: ['Гідроелектростанція', 'Теплова електростанція', 'Атомна електростанція', 'Вітрова електростанція'], correct: 0, detail: 'ГЕС виробляє електроенергію, використовуючи енергію руху води.' },
  { category: 'Історія міста', question: 'Яка назва міста передувала назві Запоріжжя у 1921 році?', answers: ['Олександрівськ', 'Катеринослав', 'Нікополь', 'Пологи'], correct: 0, detail: 'До перейменування місто називалося Олександрівськ.' },
  { category: 'Місця Запоріжжя', question: 'Який національний заповідник охоплює значну частину острова Хортиця?', answers: ['«Хортиця»', '«Кам’яна Могила»', '«Ольвія»', '«Таврія»'], correct: 0, detail: 'Національний заповідник «Хортиця» зберігає природну й культурну спадщину острова.' },
  { category: 'Постаті та спадщина', question: 'З ким найтісніше пов’язують заснування Запорозької Січі на острові Мала Хортиця?', answers: ['Дмитром Вишневецьким (Байдою)', 'Богданом Хмельницьким', 'Петром Сагайдачним', 'Іваном Мазепою'], correct: 0, detail: 'Князя Дмитра Вишневецького традиційно вважають засновником укріплення на Малій Хортиці.' },
  { type: 'multiple', category: 'Давні народи', question: 'Які народи жили або проходили степами Запорізького краю в давнину? Оберіть усі правильні відповіді.', answers: ['Скіфи', 'Сармати', 'Гуни', 'Вікінги'], correct: [0, 1, 2], detail: 'У степах краю залишили сліди скіфи, сармати й гуни; вікінги не були народом цього степового регіону.' },
  { type: 'multiple', category: 'Запорозьке козацтво', question: 'Якими заняттями жили запорозькі козаки? Оберіть усі правильні відповіді.', answers: ['Військовою справою', 'Рибальством', 'Полюванням', 'Виробництвом океанських лайнерів'], correct: [0, 1, 2], detail: 'Козаки займалися військовою справою, рибальством, полюванням, землеробством і торгівлею.' },
  { type: 'matching', category: 'Встановіть відповідність', question: 'Поєднайте місце або об’єкт із його значенням.', pairs: [
    { left: 'Хортиця', right: 'Острів із пам’ятками різних епох' },
    { left: 'Кам’яна Могила', right: 'Археологічна пам’ятка з петрогліфами' },
    { left: 'ДніпроГЕС', right: 'Гідроелектростанція на Дніпрі' }
  ], detail: 'Хортиця зберігає пам’ятки різних епох, Кам’яна Могила відома петрогліфами, а ДніпроГЕС виробляє електроенергію з енергії води.' },
  { type: 'matching', category: 'Встановіть відповідність', question: 'Поєднайте поняття з його описом.', pairs: [
    { left: 'Чайка', right: 'Легкий козацький човен' },
    { left: 'Соцмісто', right: 'Індустріальний район Запоріжжя' },
    { left: 'Меноніти', right: 'Громада колоністів, відома господарством і ремеслами' }
  ], detail: 'Чайка була козацьким човном, Соцмісто формувалося як промисловий район, а менонітські громади розвивали господарство й ремесла.' }
];

const count = document.querySelector('#question-count');
const scoreLabel = document.querySelector('#score-label');
const progress = document.querySelector('#progress');
const progressTrack = document.querySelector('.progress-track');
const category = document.querySelector('#category');
const title = document.querySelector('#quiz-title');
const answers = document.querySelector('#answers');
const feedback = document.querySelector('#feedback');
const next = document.querySelector('#next');
let current = 0;
let score = 0;

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatScore(value) {
  return value.toLocaleString('uk-UA', { maximumFractionDigits: 2 });
}

function renderQuestion() {
  const item = questions[current];
  count.textContent = `Питання ${current + 1} з ${questions.length}`;
  scoreLabel.textContent = `Рахунок: ${formatScore(score)}`;
  category.textContent = item.category;
  title.textContent = item.question;
  feedback.textContent = '';
  feedback.className = 'feedback';
  next.disabled = true;
  next.innerHTML = current === questions.length - 1 ? 'Побачити результат <span aria-hidden="true">→</span>' : 'Наступне питання <span aria-hidden="true">→</span>';
  if (item.type === 'matching') renderMatching(item);
  else renderChoices(item);
  progress.style.width = `${(current / questions.length) * 100}%`;
  progressTrack.setAttribute('aria-valuenow', String(current));
}

function renderChoices(item) {
  const options = shuffle(item.answers.map((text, index) => ({ text, index })));
  answers.replaceChildren(...options.map(({ text, index }) => {
    if (item.type === 'multiple') {
      const label = document.createElement('label');
      label.className = 'answer answer-choice';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = String(index);
      label.append(checkbox, document.createTextNode(text));
      return label;
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.dataset.answerIndex = String(index);
    button.textContent = text;
    button.addEventListener('click', () => selectAnswer(index));
    return button;
  }));
  if (item.type === 'multiple') {
    const submit = document.createElement('button');
    submit.type = 'button';
    submit.className = 'answer-submit';
    submit.textContent = 'Перевірити відповідь';
    submit.addEventListener('click', () => selectMultiple(item));
    answers.append(submit);
  }
}

function renderMatching(item) {
  const choices = shuffle(item.pairs.map((pair) => pair.right));
  const rows = item.pairs.map((pair, index) => {
    const row = document.createElement('label');
    row.className = 'match-row';
    const prompt = document.createElement('span');
    prompt.textContent = pair.left;
    const select = document.createElement('select');
    select.className = 'match-select';
    select.dataset.pair = String(index);
    select.setAttribute('aria-label', `Відповідність для: ${pair.left}`);
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Оберіть відповідь';
    select.append(placeholder);
    choices.forEach((choice) => {
      const option = document.createElement('option');
      option.value = choice;
      option.textContent = choice;
      select.append(option);
    });
    row.append(prompt, select);
    return row;
  });
  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'answer-submit';
  submit.textContent = 'Перевірити відповідність';
  submit.addEventListener('click', () => selectMatching(item));
  answers.replaceChildren(...rows, submit);
}

function selectAnswer(selected) {
  const item = questions[current];
  const buttons = [...answers.children];
  buttons.forEach((button, index) => {
    button.disabled = true;
    const answerIndex = Number(button.dataset.answerIndex);
    if (answerIndex === item.correct) button.classList.add('correct');
    else if (answerIndex === selected) button.classList.add('incorrect');
  });
  finishAnswer(selected === item.correct ? 1 : 0, item.detail);
}

function selectMultiple(item) {
  const selected = [...answers.querySelectorAll('input:checked')].map((input) => Number(input.value));
  const correct = item.correct;
  const correctSelected = selected.filter((index) => correct.includes(index)).length;
  const incorrectSelected = selected.length - correctSelected;
  const points = Math.max(0, (correctSelected - incorrectSelected) / correct.length);
  answers.querySelectorAll('input').forEach((input) => {
    input.disabled = true;
    const label = input.closest('.answer');
    const index = Number(input.value);
    if (correct.includes(index)) label.classList.add('correct');
    else if (input.checked) label.classList.add('incorrect');
  });
  finishAnswer(points, item.detail);
}

function selectMatching(item) {
  const selects = [...answers.querySelectorAll('.match-select')];
  let matched = 0;
  selects.forEach((select, index) => {
    select.disabled = true;
    const isPairCorrect = select.value === item.pairs[index].right;
    if (isPairCorrect) matched++;
    select.classList.add(isPairCorrect ? 'correct' : 'incorrect');
  });
  finishAnswer(matched / item.pairs.length, item.detail);
}

function finishAnswer(points, detail) {
  score += points;
  scoreLabel.textContent = `Рахунок: ${formatScore(score)}`;
  const result = points === 1 ? 'Правильно! Зараховано 1 бал.' : points > 0 ? `Частково правильно! Зараховано ${formatScore(points)} бала.` : 'Не зовсім. Балів за це питання немає.';
  feedback.textContent = `${result} ${detail}`;
  feedback.classList.add(points > 0 ? 'is-correct' : 'is-wrong');
  answers.querySelectorAll('.answer-submit').forEach((button) => { button.disabled = true; });
  next.disabled = false;
}

function renderResult() {
  const percent = Math.round((score / questions.length) * 100);
  const message = percent >= 85 ? 'Чудове знання історії Запорізького краю!' : percent >= 50 ? 'Гарний результат! Ще трохи — і ви знаєте край як дослідник.' : 'Час відкрити для себе більше історій Запорізького краю.';
  count.textContent = 'Вікторину завершено';
  scoreLabel.textContent = `Результат: ${formatScore(score)} з ${questions.length}`;
  category.textContent = 'Ваш результат';
  title.textContent = `${percent}% правильних відповідей`;
  answers.replaceChildren();
  feedback.textContent = message;
  feedback.className = 'feedback';
  next.disabled = false;
  next.innerHTML = 'Спробувати ще раз <span aria-hidden="true">↻</span>';
  progress.style.width = '100%';
  progressTrack.setAttribute('aria-valuenow', String(questions.length));
}

next.addEventListener('click', () => {
  if (current === questions.length) { current = 0; score = 0; renderQuestion(); return; }
  current++;
  if (current === questions.length) renderResult();
  else renderQuestion();
});

renderQuestion();
