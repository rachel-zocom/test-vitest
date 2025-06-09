## Test with Vitest

1. Vitest
2. React Testing Library

## Installera Vitest och RTL

```
npm install --save-dev vitest @testing-library/react jsdom
```

vitest: test-ramverket.
@testing-library/react: för att rendera React-komponenter i tester.
jsdom: emulerar DOM så att vi kan testa React-komponenter.

## Lägg till detta i vite.config.js:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

test: {
environment: 'jsdom',
globals: true,
},
```

## Lägg till i package.json

```
"scripts": {
"test": "vitest"
}
```

### Skapa en komponent

T ex Greeting.jsx

### Skapa en testfil

Förslag på en skalbar mappstruktur för ett React-projekt med Jest och React Testing Library. Testfiler placeras bredvid de komponenter de testar, vilket förenklar underhåll och förståelse.

![image](https://github.com/user-attachments/assets/4a246498-e708-4cf8-a7eb-f320019baf82)

### Kör testet

```
npm run test
```
