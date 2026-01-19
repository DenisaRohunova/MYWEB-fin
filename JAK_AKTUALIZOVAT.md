# 📝 Jak aktualizovat web - Rychlý návod

## 🚀 Nejjednodušší způsob (3 kroky):

### 1. Upravte soubory
Otevřete a upravte soubory v editoru (Cursor/VS Code):
- **Texty:** `messages/cs.json` nebo `messages/en.json`
- **Reference:** `data/testimonials.ts`
- **Obrázky:** Přidejte do `public/photos/` nebo `public/client-logos/`

### 2. Commitněte změny
V terminálu (v kořenové složce projektu):
```bash
git add .
git commit -m "Popis vašich změn"
git push origin main
```

### 3. Hotovo! 🎉
- Vercel automaticky nasadí novou verzi
- Trvá 1-3 minuty
- Web se aktualizuje automaticky

---

## 📋 Příklady aktualizací

### Změnit text na hlavní stránce:
1. Otevřete `messages/cs.json`
2. Najděte sekci, kterou chcete změnit (např. `"hero"`)
3. Změňte text
4. Uložte soubor
5. V terminálu:
   ```bash
   git add messages/cs.json
   git commit -m "Aktualizován text na hlavní stránce"
   git push origin main
   ```

### Přidat novou referenci:
1. Otevřete `data/testimonials.ts`
2. Přidejte nový objekt do pole `testimonials`
3. Uložte soubor
4. V terminálu:
   ```bash
   git add data/testimonials.ts
   git commit -m "Přidána nová reference"
   git push origin main
   ```

### Přidat nový obrázek:
1. Zkopírujte obrázek do `public/photos/` nebo `public/client-logos/`
2. V terminálu:
   ```bash
   git add public/photos/nazev-obrazku.jpg
   git commit -m "Přidán nový obrázek"
   git push origin main
   ```

### Změnit kontaktní email:
1. Otevřete `messages/cs.json`
2. Najděte `"contact"` → `"email"`
3. Změňte hodnotu
4. Uložte a commitněte

---

## ⚠️ Důležité poznámky

- **Vždy commitněte a pushněte změny** - jinak se neprojeví na webu
- **Počkejte 1-3 minuty** po pushnutí - deployment trvá chvíli
- **Zkontrolujte Vercel dashboard** pokud něco nefunguje
- **Environment variables** (API klíče) se nastavují v Vercel, ne v kódu

---

## 🔍 Kde najít co upravit?

| Co chcete změnit | Soubor |
|------------------|--------|
| Texty (česky) | `messages/cs.json` |
| Texty (anglicky) | `messages/en.json` |
| Reference | `data/testimonials.ts` |
| Obrázky | `public/photos/` nebo `public/client-logos/` |
| Barvy/styly | `app/globals.css` |
| Komponenty | `components/` |

---

## 💡 Tipy

- **Zkuste změny lokálně:** Spusťte `npm run dev` a otevřete http://localhost:3000
- **Použijte GitHub Desktop:** Pokud nechcete používat terminál, stáhněte GitHub Desktop
- **Vercel Preview:** Každý commit vytvoří preview URL, kde můžete zkontrolovat změny před nasazením

---

## 🆘 Problémy?

- **Změny se neprojevily?** Zkontrolujte Vercel dashboard pro chyby
- **Nevím, co commitnout?** Použijte `git status` pro zobrazení změn
- **Zapomněl jsem commitnout?** Všechny změny jsou stále lokálně, stačí commitnout
