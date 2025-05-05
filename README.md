# 🎲 Dicee Játék

Egyszerű dobókocka játék, ahol két játékos dobókockái véletlenszerűen generálódnak, és a nagyobb értéket dobó játékos nyer.

![Dicee Játék](https://img.shields.io/badge/Játék-Dicee-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)

## 📝 Leírás

A **Dicee** egy egyszerű, de szórakoztató webes dobókocka játék, ahol két játékos dobókockái véletlenszerűen jelennek meg minden alkalommal, amikor az oldalt frissítjük. A játék automatikusan meghatározza a győztest a dobott értékek alapján.

## 🎮 Játékmenet

1. Nyisd meg a weboldalt
2. Az oldal betöltésekor mindkét játékoshoz véletlenszerűen generálódik egy-egy dobókocka (1-6 érték)
3. A fejléc kijelzi, melyik játékos nyert, vagy döntetlen esetén a "Döntetlen!" üzenet jelenik meg
4. Új játszmához egyszerűen frissítsd az oldalt

## 🖼️ Előnézet

### Dobókockák
| Dobás 1 | Dobás 2 | Dobás 3 | Dobás 4 | Dobás 5 | Dobás 6 |
|---------|---------|---------|---------|---------|---------|
| ![Dobás 1](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice1.png) | ![Dobás 2](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice2.png) | ![Dobás 3](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice3.png) | ![Dobás 4](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice4.png) | ![Dobás 5](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice5.png) | ![Dobás 6](https://raw.githubusercontent.com/namezor90/dicee/main/images/dice6.png) |

## 🚀 Kezdeti lépések

### Előfeltételek

- Egy modern webböngésző (Chrome, Firefox, Safari, Edge)

### Telepítés

1. Klónozd le a repository-t:
```bash
git clone https://github.com/namezor90/dicee.git
```

2. Nyisd meg a `dicee.html` fájlt a böngésződben

## 🧩 Projekt struktúra

```
dicee/
│
├── dicee.html         # A fő HTML fájl
├── styles.css         # CSS stílusok
├── index.js           # JavaScript logika
└── images/            # Dobókocka képek mappa
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

## ⚙️ Technológiák

- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts (Indie Flower, Lobster)

## 💻 Kód részletek

### JavaScript Logika

```javascript
// Véletlenszerű szám generálása 1 és 6 között az 1. játékosnak
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Véletlenszerű szám generálása 1 és 6 között a 2. játékosnak
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// A győztes meghatározása
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "1. Játékos nyert";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "2. Játékos nyert";
} else {
    document.querySelector(".container h1").textContent = "Döntetlen!";
}
```

## 🌐 Demó

[Élő demó megtekintése](https://namezor90.github.io/dicee/)

## 📜 Licenc

[MIT](https://choosealicense.com/licenses/mit/)

## 👨‍💻 Szerző

- **Neved** - [GitHub Profilod](https://github.com/namezor90)

## 🙏 Köszönetnyilvánítás

- Egyedi dobókocka ikonok
- Google Fonts a szép betűtípusokért
- Minden játékosnak, aki kipróbálja a játékot
