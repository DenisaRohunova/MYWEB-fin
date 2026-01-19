# 🚀 Návod na zveřejnění webu denisarohunova.cz

## Krok 1: Commitnout změny do Git

```bash
git add .
git commit -m "Připraveno pro deployment - opravený formulář a middleware"
git push origin main
```

## Krok 2: Nastavit Vercel (nejjednodušší řešení)

### 2.1 Vytvořit účet na Vercel
1. Jděte na https://vercel.com
2. Přihlaste se pomocí GitHub účtu (stejný jako máte pro Git repository)
3. Klikněte na "Add New Project"

### 2.2 Importovat projekt
1. Vyberte vaše Git repository (MyWeb-2 nebo jak se jmenuje)
2. Vercel automaticky detekuje Next.js
3. **DŮLEŽITÉ - Nastavit Environment Variables:**
   - Klikněte na "Environment Variables"
   - Přidejte tyto 3 proměnné:
     ```
     RESEND_API_KEY = re_ajMzJoCy_C76Ubqh4CikKC7dKtDnezP17
     RESEND_FROM_EMAIL = onboarding@resend.dev
     CONTACT_EMAIL = denisa@taskyo.cz
     ```
4. Klikněte na "Deploy"

### 2.3 Přidat vlastní doménu
1. Po úspěšném deploymentu jděte do "Settings" → "Domains"
2. Přidejte doménu: `denisarohunova.cz`
3. Přidejte také: `www.denisarohunova.cz`
4. Vercel vám ukáže DNS záznamy, které potřebujete

## Krok 3: Nastavit DNS na Wedos.com

### 3.1 Přihlaste se do Wedos
1. Jděte na https://www.wedos.com a přihlaste se
2. Najděte správu DNS pro doménu `denisarohunova.cz`

### 3.2 Přidat DNS záznamy
Vercel vám poskytne přesné hodnoty, ale obecně potřebujete:

**Pro hlavní doménu (denisarohunova.cz):**
```
Typ: A
Název: @
Hodnota: [IP adresa z Vercel - najdete v Vercel dashboardu]
TTL: 3600
```

**Pro www subdoménu (www.denisarohunova.cz):**
```
Typ: CNAME
Název: www
Hodnota: cname.vercel-dns.com (nebo hodnota z Vercel)
TTL: 3600
```

### 3.3 Počkat na propagaci DNS
- DNS změny se projeví během 5-60 minut
- Můžete zkontrolovat na https://dnschecker.org

## Krok 4: Ověřit SSL certifikát
- Vercel automaticky nastaví SSL certifikát (HTTPS)
- Může trvat několik minut, než se aktivuje

## ✅ Hotovo!
Váš web by měl být dostupný na:
- https://denisarohunova.cz
- https://www.denisarohunova.cz

---

## 📝 Jak aktualizovat web v budoucnu

### Jednoduchý způsob (doporučeno):

1. **Upravte soubory lokálně** (např. v Cursor/VS Code)
2. **Commitněte změny:**
   ```bash
   git add .
   git commit -m "Popis změn"
   git push origin main
   ```
3. **Vercel automaticky nasadí novou verzi!** 
   - Deployment začne automaticky během pár sekund
   - Trvá obvykle 1-3 minuty
   - Uvidíte progress v Vercel dashboardu

### Co můžete jednoduše upravovat:
- **Texty:** `messages/cs.json` a `messages/en.json`
- **Reference:** `data/testimonials.ts`
- **Obrázky:** Přidejte do `public/photos/` nebo `public/client-logos/`
- **Styly:** `app/globals.css`
- **Komponenty:** Složka `components/`

### Příklad aktualizace textu:
1. Otevřete `messages/cs.json`
2. Změňte text (např. v sekci "hero")
3. Uložte soubor
4. V terminálu:
   ```bash
   git add messages/cs.json
   git commit -m "Aktualizován text na hlavní stránce"
   git push origin main
   ```
5. Počkejte 1-3 minuty - web se automaticky aktualizuje!

---

## 🔧 Alternativní řešení (pokud máte VPS na Wedos)

Pokud máte VPS hosting na Wedos s Docker podporou:

1. **Build Docker image:**
   ```bash
   docker build -t denisa-portfolio .
   ```

2. **Push do Docker Hub:**
   ```bash
   docker tag denisa-portfolio vasejmeno/denisa-portfolio
   docker push vasejmeno/denisa-portfolio
   ```

3. **Na VPS serveru:**
   ```bash
   docker pull vasejmeno/denisa-portfolio
   docker run -d -p 3000:3000 \
     -e RESEND_API_KEY=re_ajMzJoCy_C76Ubqh4CikKC7dKtDnezP17 \
     -e RESEND_FROM_EMAIL=onboarding@resend.dev \
     -e CONTACT_EMAIL=denisa@taskyo.cz \
     --name denisa-portfolio \
     --restart unless-stopped \
     vasejmeno/denisa-portfolio
   ```

4. **Nastavit Nginx reverse proxy** (pokud je potřeba)

**Ale Vercel je mnohem jednodušší!** 🎉

---

## ❓ Časté otázky

**Q: Kolik to stojí?**
A: Vercel má zdarma generous free tier, který je dostatečný pro portfolio web.

**Q: Jak rychle se změny projeví?**
A: Po `git push` se deployment spustí automaticky a trvá 1-3 minuty.

**Q: Co když něco pokazím?**
A: Vercel má automatické rollbacky. Můžete se vrátit k předchozí verzi jedním kliknutím.

**Q: Musím znát Git?**
A: Základní příkazy (`git add`, `git commit`, `git push`) stačí. Nebo můžete použít GitHub Desktop pro grafické rozhraní.

---

## 🆘 Potřebujete pomoc?

Pokud narazíte na problém:
1. Zkontrolujte Vercel dashboard pro error messages
2. Zkontrolujte DNS propagaci na dnschecker.org
3. Zkontrolujte, že environment variables jsou správně nastavené
