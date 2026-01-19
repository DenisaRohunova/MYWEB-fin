# 🚀 START ZDE - Zveřejnění webu denisarohunova.cz

## ✅ Co je už hotovo:
- ✅ Všechny změny jsou commitnuté do Git
- ✅ Kontaktní formulář je opravený a funguje
- ✅ Middleware je opravený
- ✅ Environment variables jsou připravené

## 📋 Co teď udělat (3 jednoduché kroky):

### KROK 1: Pushnout změny do Git (pokud ještě nejsou)
```bash
git push origin main
```

### KROK 2: Nastavit Vercel (5 minut)

1. **Jděte na https://vercel.com** a přihlaste se pomocí GitHub účtu

2. **Klikněte na "Add New Project"** a vyberte vaše Git repository

3. **DŮLEŽITÉ - Nastavit Environment Variables:**
   - V sekci "Environment Variables" přidejte:
     - `RESEND_API_KEY` = `re_ajMzJoCy_C76Ubqh4CikKC7dKtDnezP17`
     - `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
     - `CONTACT_EMAIL` = `denisa@taskyo.cz`

4. **Klikněte na "Deploy"** a počkejte na dokončení

### KROK 3: Přidat doménu a nastavit DNS (10 minut)

1. **V Vercel dashboardu:**
   - Jděte do "Settings" → "Domains"
   - Přidejte: `denisarohunova.cz`
   - Přidejte: `www.denisarohunova.cz`
   - Vercel vám ukáže DNS záznamy

2. **V Wedos.com:**
   - Přihlaste se do Wedos
   - Najděte DNS správu pro `denisarohunova.cz`
   - Přidejte záznamy, které vám Vercel ukázal:
     - **A record** pro hlavní doménu
     - **CNAME record** pro www

3. **Počkejte 5-60 minut** na DNS propagaci

## 🎉 Hotovo!
Váš web bude dostupný na:
- https://denisarohunova.cz
- https://www.denisarohunova.cz

---

## 📝 Jak aktualizovat web v budoucnu:

**Jednoduše:**
1. Upravte soubory (např. `messages/cs.json`)
2. V terminálu:
   ```bash
   git add .
   git commit -m "Popis změn"
   git push origin main
   ```
3. Vercel automaticky nasadí novou verzi během 1-3 minut!

**Více detailů:** Podívejte se do `JAK_AKTUALIZOVAT.md`

---

## 📚 Další dokumentace:
- **Kompletní návod:** `DEPLOYMENT_GUIDE.md`
- **Jak aktualizovat:** `JAK_AKTUALIZOVAT.md`
- **Wedos specifické:** `WEDOS_DEPLOYMENT.md`

---

## ❓ Potřebujete pomoc?
Pokud narazíte na problém, zkontrolujte:
1. Vercel dashboard pro error messages
2. DNS propagaci na https://dnschecker.org
3. Environment variables v Vercel settings
