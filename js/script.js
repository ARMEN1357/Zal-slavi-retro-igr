const h1 = document.getElementById('h1');
const p = document.getElementById('p');
const p2 = document.getElementById('p2');
const games = document.getElementById('games');
const about_div = document.getElementById('about');
const settings_div = document.getElementById('settings');
const music = document.getElementById('music');
const audio_button = document.getElementById('audio');
const img = document.getElementById('img');

// одностраничность
function index() {
    games.style.display = "flex";
    about_div.style.display = "none";
    settings_div.style.display = "none";
    p2.style.display = "none";
    img.style.display = "none";
    p.style.display = "block";
    p.textContent = "легендарных ретро-игр (нажми на название игры)";
    h1.textContent = "Зал славы";
}

function about() {
    about_div .style.display = "block";
    games.style.display = "none";
    settings_div.style.display = "none";
    p2.style.display = "none";
    img.style.display = "none";
    p.style.display = "none";
    h1.textContent = "О сайте";
}

function settings() {
    settings_div.style.display = "block";
    games.style.display = "none";
    about_div.style.display = "none";
    p2.style.display = "none";
    img.style.display = "none";
    p.style.display = "none";
    h1.textContent = "Настройки";
}

// музыка и тема
function theme(){
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
}

function player() {
    if (music.paused){
        music.play();
        audio_button.textContent = "Выключить музыку";
    } else {
        music.pause();
        audio_button.textContent = "Включить музыку";
    }
}

// отображение описания
function func1() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/pac-man.png";
    h1.textContent = "PAC-MAN (1980)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Управляйте желтеньким героем по имени Пакман, пожирая точки и фрукты на карте, избегая преследующих призраков.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Один из символов золотой эры аркадных игр, впервые представил игровой процесс, основанный на ловкости и тайминге.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Призрак Blinky («Красный») назван в честь японской звезды шоу-бизнеса Масаюки Бинки.";
}

function func2() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/space-invanders.jpeg";
    h1.textContent = "SPACE INVADERS (1978)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Защищайте Землю от нашествия пришельцев, обстреливая медленно опускающиеся ряды инопланетян.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Первая популярная игра-шутер, открывшая дорогу целому жанру.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Успех игры привел к дефициту японских монет достоинством 100 йен.";
}

function func3() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/donkey-kong.png";
    h1.textContent = "DONKEY KONG (1981)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Помогите водопроводчику Марио спасти принцессу Пич, прыгая по лестницам и обходя опасные препятствия.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Игра положила начало франшизе Mario и заложила основы жанра платформеров.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> До выхода Mario игра называлась Jumpman.";
}

function func4() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/super_mario_bros.jpg";
    h1.textContent = "SUPER MARIO BROS. (1985)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Исследуйте волшебное королевство Грибов, спасая принцессу Пич от злодея Боузера.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Классика жанра платформеров, установившая стандарты дизайна уровней и управления героями.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Игра была доступна эксклюзивно на приставке Famicom/Nintendo Entertainment System.";
}

function func5() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/tetris.jpg";
    h1.textContent = "TETRIS (1984)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Складывайте падающие фигуры таким образом, чтобы заполнить горизонтальные строки и удалить их с экрана.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Простота правил и затягивающий геймплей делают Tetris любимой миллионами.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Тетрис родился в СССР, разработанный программистом Алексеем Пажитновы";
}

function func6() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/final-fantasy.jpg";
    h1.textContent = "FINAL FANTASY VII (1997)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Возглавляем отряд повстанцев, противостоящих мегакорпорации Shinra и её планам по разрушению планеты.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Широкая аудитория RPG полюбила глубокую сюжетную линию и ярких героев.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Семилетняя разработка сделала FFVII одной из самых дорогих игр своего времени.";
}

function func7() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/doom.jpg";
    h1.textContent = "DOOM (1993)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Проходите уровни подземелий, уничтожая орды демонов оружием различного калибра.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Первый настоящий FPS (First Person Shooter), подаривший миру популярный жанр.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Версия Doom была создана всего за один год командой из восьми человек.";
}

function func8() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/sonic-the-hedgehog.png";
    h1.textContent = "SONIC THE HEDGEHOG (1991)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Бегите по уровням, побеждая доктор Роботника и собирая золотые кольца.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Скоростной платформер с уникальным главным героем — ёжиком Соником.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Разработчики выбрали синий цвет персонажа специально, чтобы соответствовать фирменному цвету Sega.";
}

function func9() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/the-legend-of-zelda.webp";
    h1.textContent = "THE LEGEND OF ZELDA (1986)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Отправляйтесь в приключение по Хиронии, освобождая царство от зла и спасая принцессу Зельду.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Открытый мир, нелинейный геймплей и загадки стали визитной карточкой сериала Zelda.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> В оригинальной версии The Legend of Zelda невозможно закончить игру без подсказок.";
}

function func10() {
    games.style.display = "none";
    p.style.display = "none";
    p2.style.display = "block";
    img.style.display = "block";
    img.src = "img/starcraft.webp";
    h1.textContent = "STARCRAFT (1998)";
    p2.innerHTML = "<span style='font-size: 20px; color: var(--console-green);'>Цель:</span> Ведите войну трех рас — терранов, зергов и протоссов, добиваясь превосходства на стратегических картах.<br><br><span style='font-size: 20px; color: var(--console-green);'>Особенности:</span> Сложные многопользовательские сражения сделали Starcraft иконой киберспорта.<br><br><span style='font-size: 20px; color: var(--console-green);'>Интересный факт:</span> Starcraft установил новый стандарт RTS-жанра, привнеся баланс и разнообразие классов.";
}