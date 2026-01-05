export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  text: {
    cs: string;
    en: string;
  };
  isVideo?: boolean;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'josef-eder',
    name: 'Ing. Josef Eder',
    role: 'Jednatel společnosti',
    company: 'SLUŽBY MĚSTA JIHLAVY s.r.o.',
    photo: 'https://jihlavanasemesto.cz/wp-content/uploads/2024/02/eder2.jpg',
    text: {
      cs: 'Lektorka Denisa je velmi pozitivní člověk a svým nadšením dokázala přesvědčit i ty skeptiky, kteří přicházeli s určitým chladným zájmem. Jak výstižně zhodnotil kolega: „Na kurz AI jsem přicházel s despektem, ale díky Denise odcházím s nadšením a respektem". Přestože mezi lektorkou a některými posluchači byl výrazný věkový rozdíl, tak dokázala mluvit srozumitelně a lidsky. Takže za mě palce nahoru.',
      en: 'Lecturer Denisa is a very positive person and with her enthusiasm she managed to convince even the skeptics who came with a certain cold interest. As a colleague aptly put it: "I came to the AI course with disdain, but thanks to Denisa I leave with enthusiasm and respect". Even though there was a significant age difference between the lecturer and some listeners, she managed to speak clearly and humanly. So thumbs up from me.'
    }
  },
  {
    id: 'video-1',
    name: 'Video Reference 1',
    role: '',
    company: '',
    photo: '',
    text: {
      cs: '',
      en: ''
    },
    isVideo: true,
    videoUrl: 'https://www.youtube.com/embed/v08D4jazAsk'
  },
  {
    id: 'video-2',
    name: 'Video Reference 2',
    role: '',
    company: '',
    photo: '',
    text: {
      cs: '',
      en: ''
    },
    isVideo: true,
    videoUrl: 'https://www.youtube.com/embed/Cc5NSdrdtRs'
  },
  {
    id: 'tereza-svobodova',
    name: 'Tereza Svobodová',
    role: 'Provozní ředitelka',
    company: 'Asklepion – Institut klinické a estetické medicíny',
    photo: 'https://objednavka.asklepion.cz/css/logo.svg',
    text: {
      cs: 'AI školení hodnotíme velmi pozitivně – bylo praktické, srozumitelné a dobře strukturované. Našim zaměstnancům, kteří s AI teprve začínali, pomohlo rychle pochopit základy a získat jistotu v používání. Zároveň přineslo hodnotu i skutečně pokročilejším účastníkům díky konkrétním workflow, tipům a ukázkám z praxe. Oceňujeme interaktivní přístup lektora a prostor pro dotazy. Lektorka Denisa je maximálně vstřícná, vzbuzuje v účastnících školení skutečný zájem o AI a vytváří příjemnou a uvolněnou atmosféru.',
      en: 'We rate the AI training very positively – it was practical, clear and well structured. It helped our employees who were just starting with AI to quickly understand the basics and gain confidence in using it. At the same time, it brought value to truly advanced participants thanks to specific workflows, tips and practical examples. We appreciate the interactive approach of the lecturer and space for questions. Lecturer Denisa is maximally accommodating, arouses genuine interest in AI in training participants and creates a pleasant and relaxed atmosphere.'
    }
  },
  {
    id: 'petr-dvorak',
    name: 'Petr Dvořák',
    role: '',
    company: 'Mercedes-Benz Česká republika s.r.o.',
    photo: 'https://framerusercontent.com/images/75mL4xErohx3bYpwYgZlsvU2c.jpeg',
    text: {
      cs: 'AI je bezpochyby velice aktuální téma a dá se s ním velice dobře pracovat. Denisa tohle umí, ale přidává něco zásadního navíc. Pozitivní energii, klidnou sílu a laskavost. To zabírá u naprosté většiny posluchačů. Pro změnu myšlení tahle kombinace prostě výborně funguje...',
      en: 'AI is undoubtedly a very current topic and can be worked with very well. Denisa knows how to do this, but adds something fundamentally extra. Positive energy, calm strength and kindness. This works with the vast majority of listeners. For changing thinking, this combination simply works excellently...'
    }
  },
  {
    id: 'martina-juricova',
    name: 'Martina Juřicová',
    role: 'Projektový manažer a zástupce ředitele',
    company: 'Ostravského muzea',
    photo: 'https://www.ostrmuz.cz/__file/web/9525/om_logo_horizontal.jpeg',
    text: {
      cs: 'Školení mi přineslo nové poznatky a pomohlo mi lépe se zorientovat v možnostech praktického využití AI. Díky tomu věřím, že se v naší organizaci zlepší rychlost i efektivita práce. Bylo vidět, že školitelka byla na školení skvěle připravená a dokázala se přizpůsobit potřebám skupiny i rozdílné úrovni znalostí. Nešlo o jednostranné předávání informací, ale o skutečně interaktivní a praktické setkání. Celý průběh byl velmi příjemný – zábavný, srozumitelný a bez zbytečného zahlcování. Oceňuji také následné shrnutí a množství materiálů zaslaných e-mailem, ke kterým se můžeme vracet. Při spolupráci s ní mohou ostatní očekávat profesionální, ale zároveň lidský přístup a opravdový zájem o předání zkušeností i práci se zpětnou vazbou. Určitě budeme mít zájem o další školení a pokračování spolupráce.',
      en: 'The training brought me new insights and helped me better orient myself in the possibilities of practical use of AI. Thanks to this, I believe that both the speed and efficiency of work will improve in our organization. It was clear that the trainer was excellently prepared for the training and was able to adapt to the needs of the group and different levels of knowledge. It was not about one-sided transfer of information, but about a truly interactive and practical meeting. The whole process was very pleasant – entertaining, clear and without unnecessary overload. I also appreciate the subsequent summary and the amount of materials sent by email that we can return to. When working with her, others can expect a professional but at the same time human approach and genuine interest in sharing experiences and working with feedback. We will definitely be interested in further training and continuing cooperation.'
    }
  },
  {
    id: 'lukas-petrik',
    name: 'Lukáš Petřík',
    role: 'Ředitel',
    company: 'Okresní hospodářská komora Opava',
    photo: 'https://framerusercontent.com/images/S2mQ5hcCWTqzw2Iw4VZ4JE9zu8.jpeg?scale-down-to=512',
    text: {
      cs: 'Na webináři s Denisou mě příjemně překvapilo, jak přirozený má projev a jak jednoduše dokáže vysvětlit i složité věci. Školení bylo užitečné i pro laiky. I lidé bez předchozího kontaktu s AI si z něj odnesli konkrétní inspiraci do praxe. Denisa dokáže svým přístupem nadchnout pro umělou inteligenci i úplné začátečníky, takže účastníci odcházeli plní nové motivace.',
      en: 'At the webinar with Denisa, I was pleasantly surprised by how natural her presentation is and how simply she can explain even complex things. The training was useful even for laypeople. Even people without previous contact with AI took away concrete inspiration for practice. Denisa can inspire even complete beginners for artificial intelligence with her approach, so participants left full of new motivation.'
    }
  },
  {
    id: 'berta-herrero',
    name: 'Berta Herrero',
    role: 'Founder & Director',
    company: 'European Leadership Academy',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQFY8RoyBgbYqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700495487805?e=1769040000&v=beta&t=Cp9t4fDM9Bj2t47MSFHJpxMipy4weG2xRsbmLvFSXrg',
    text: {
      cs: 'Denisa představuje novou generaci technologických lídrů, kterou Evropa potřebuje. Během své doby u nás v European Leadership Academy prokázala výjimečnou odbornost v AI, spojenou se strategickým myšlením a silným etickým povědomím. Je přemýšlivá, přesná a účinná – profesionál, kterého bych bez váhání doporučil.',
      en: 'Denisa represents the new generation of tech leaders Europe needs. During her time with us at the European Leadership Academy, she demonstrated exceptional expertise in AI, paired with strategic thinking and strong ethical awareness. She is thoughtful, precise, and impactful — a professional I would recommend without hesitation.'
    }
  },
  {
    id: 'miroslav-merenda',
    name: 'Miroslav Merenda',
    role: 'CEO / General Manager',
    company: 'BR Group',
    photo: 'https://framerusercontent.com/images/8ME3p6EqqOH9c0z5p1X6eud2Q8o.jpeg?scale-down-to=512',
    text: {
      cs: 'Rád bych poděkoval Denise za její nadšení a nasazení, s kterým mě uvedla do světa AI. A naplnila tak mé očekávání nejen obecným a suchým úvodem, který je potřeba, ale tím hlavním a to praktickými zkušenostmi, příklady a osobní tvorbou mých vlastních AI asistentů pro mé potřeby. Jsem rád za napojení a kontakt na někoho takového, který se v tomto rychlém AI světě orientuje a neustále zdokonaluje, a navíc je schopna tuto zkušenost přenášet dál na uživatele a šířit tak nejen povědomí, ale hlavně edukovat v AI oblastech. Jsem tomu opravdu rád nejen z té profesní stránky, ale i za to jakým je člověkem.',
      en: 'I would like to thank Denisa for her enthusiasm and commitment with which she introduced me to the world of AI. And she fulfilled my expectations not only with the general and dry introduction that is needed, but with the main thing - practical experience, examples and personal creation of my own AI assistants for my needs. I am glad for the connection and contact with someone like this, who navigates in this fast AI world and constantly improves, and moreover is able to transfer this experience to users and spread not only awareness, but mainly educate in AI areas. I am really glad not only from the professional side, but also for what kind of person she is.'
    }
  },
  {
    id: 'rita-juklova',
    name: 'Rita Juklova',
    role: 'Coordinator',
    company: 'Motol University Hospital',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQF-4m-0K8Lh6A/profile-displayphoto-crop_800_800/B4DZqS1FHYIkAM-/0/1763399980986?e=1769040000&v=beta&t=tR7nHisJDd0Ueh5UGzL-8AJ-mr1tI4YaagU5ILkcJdk',
    text: {
      cs: 'Denisa má hluboké, praktické porozumění AI aplikovanému na skutečné obchodní procesy, nejen povrchové nástroje nebo trendy. Rychle pochopí, jak organizace skutečně fungují, a převede AI do smysluplných, dlouhodobých zlepšení. To, co ji odlišuje, je její schopnost vysvětlit složitá témata jasně, trpělivě a velmi lidským způsobem. V přeplněném prostoru AI konzultací vyniká Denisa jako důvěryhodný expert, který skutečně rozumí jak potenciálu, tak limitům AI. S jistotou ji mohu doporučit každému, kdo hledá praktické, důvěryhodné vedení v AI.',
      en: 'Denisa has a deep, practical understanding of AI applied to real business processes, not just surface-level tools or trends. She quickly understands how organizations actually work and translates AI into meaningful, long-term improvements. What sets her apart is her ability to explain complex topics clearly, patiently, and in a very human way. In a crowded AI consulting space, Denisa stands out as a credible expert who truly understands both the potential and the limits of AI. I can confidently recommend her to anyone looking for practical, trustworthy AI guidance.'
    }
  },
  {
    id: 'marketa-mohelnikova',
    name: 'Markéta Mohelníková',
    role: 'Spoluzakladatelka',
    company: 'Rodičovka',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHHRc8nk9OkkA/profile-displayphoto-shrink_800_800/B4DZbo6_rIGwAk-/0/1747664502108?e=1769040000&v=beta&t=bRk2NUs2Mk493Y6ppdUjWrF302x-A4MGCTNQ0v40nLQ',
    text: {
      cs: 'Denisa je velký profík, který rozhodně rozumí tomu, co dělá. Na jejím workshopu jsem nejvíce ocenila, že jsme šli rovnou k věci, naučili se věci aplikovatelné přmo do naší praxe. Žádná nudná teorie. Profesionalita a přátelská atmosféra bylo to, co dělalo tuhle akci jedinečnou. Velice ráda se s Denisou potkám na další její akci.',
      en: 'Denisa is a great professional who definitely understands what she is doing. At her workshop, I most appreciated that we went straight to the point, learned things applicable directly to our practice. No boring theory. Professionalism and friendly atmosphere were what made this event unique. I would very much like to meet Denisa at her next event.'
    }
  },
  {
    id: 'alena-danielova',
    name: 'Alena Danielová',
    role: 'Manager',
    company: 'Expat Centre',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQEiywBMyqj66A/profile-displayphoto-crop_800_800/B4EZptj8a7KYAI-/0/1762774732333?e=1769040000&v=beta&t=DfH_UQTCURjKdHUGOVO4bBmtOi4CW2wYx3tNQcx9k7I',
    text: {
      cs: 'Denisa Rohunová dokáže pracovat s tématem využití AI při hledání práce a v podnikání jasně a prakticky. Během workshopů pro cizince, včetně její prezentace na konferenci Work and Life Ostrava, prokázala vynikající dovednosti v práci s publikem a přizpůsobení tématu potřebám zahraničních talentů. Mohu doporučit Denisu jako inspirativní lektorku.',
      en: 'Denisa Rohunová is able to work with the topic of using AI in job search and business in a clear and practical way. During workshops for foreigners, including her presentation at the Work and Life Ostrava conference, she demonstrated excellent skills in working with the audience and adapting the topic to the needs of foreign talent. I can recommend Denisa as an inspiring lecturer.'
    }
  },
  {
    id: 'darina-ermisova',
    name: 'Darina Ermisová',
    role: 'Co-founder',
    company: 'FashionUP & Design',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGHxYxmTzuo6A/profile-displayphoto-shrink_800_800/B4EZdevPnCGcAk-/0/1749641133028?e=1769040000&v=beta&t=Yd5wMulFqPKhE_7Lh_vchKPNkmWFtlax7SAkRlvxNAo',
    text: {
      cs: 'Ráda bych doporučila Denisu Rohunovou, se kterou jsem měla možnost opakovaně spolupracovat ve Startovárně i mimo ni. Denisa má skutečný dar předávat své know-how tak, aby bylo srozumitelné, praktické a okamžitě použitelné. Její workshopy jsou vždy výborně připravené, strukturované a zároveň vedené s lehkostí a lidskostí. Účastníci oceňují nejen její odbornost, ale i schopnost vytvořit bezpečnou atmosféru, kde se každý může ptát, zkoušet a růst. Na Denise si nesmírně vážím její profesionality, spolehlivosti a přirozeného talentu školit. Je to člověk, který umí inspirovat, motivovat a zároveň dodat velmi konkrétní návody do praxe. Denisu s čistým svědomím doporučuji každému, kdo hledá lektorku, která opravdu umí předat hodnotu.',
      en: 'I would like to recommend Denisa Rohunová, with whom I have had the opportunity to work repeatedly at Startovárna and beyond. Denisa has a real gift for passing on her know-how in a way that is clear, practical and immediately applicable. Her workshops are always excellently prepared, structured and at the same time conducted with lightness and humanity. Participants appreciate not only her expertise, but also her ability to create a safe atmosphere where everyone can ask, try and grow. I greatly appreciate Denisa\'s professionalism, reliability and natural talent for training. She is a person who can inspire, motivate and at the same time provide very concrete guidance for practice. I wholeheartedly recommend Denisa to anyone looking for a lecturer who really knows how to pass on value.'
    }
  },
  {
    id: 'tomas-juchelka',
    name: 'Tomáš Juchelka',
    role: 'Koordinátor workshopů',
    company: 'MSIC UP',
    photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGcDNCggnWFuw/profile-displayphoto-shrink_800_800/B4DZOrCH6gG0Ag-/0/1733741281781?e=1769040000&v=beta&t=sKsof7hRLHQt3bq4eDiuabu0Lg-JkYswWBmmCc7m2BQ',
    text: {
      cs: 'Koordinuji karvinské workshopy Startovárny a na jednom takovém byla Denča lektorkou. A musím uznat, že jsem koukal, jakou zásoby informací byla schopna předat. Vše bylo vysvětleno tak, aby i úplný začátečník stíhal, předalo se hromada užitečných informací - odcházel jsem s hlavou jako balón. Vlastně do dneška čerpám z informací, které jsem se tam dozvěděl. Přátelskost a profesionalita jsou za mě skvělé vlastnosti.. a Denča má obě. Těším se na naší další spolupráci!',
      en: 'I coordinate Karviná workshops of Startovárna and Denča was a lecturer at one of them. And I must admit that I was watching what a wealth of information she was able to pass on. Everything was explained so that even a complete beginner could keep up, a lot of useful information was passed on - I left with my head like a balloon. In fact, I still draw on the information I learned there today. Friendliness and professionalism are great qualities for me... and Denča has both. I look forward to our further cooperation!'
    }
  },
  {
    id: 'marek-kubis',
    name: 'Ing. Marek Kubis, EFA',
    role: 'Jednatel a zakladatel',
    company: '4poradci s.r.o.',
    photo: 'https://framerusercontent.com/images/QmXgipwNqGYW4qquYoMW4zgM7I.jpeg?scale-down-to=512',
    text: {
      cs: 'Pokud hledáte někoho, kdo pro svoji práci fakt hoří, už nemusíte hledat dál…',
      en: 'If you are looking for someone who really burns for their work, you don\'t have to look any further...'
    }
  },
  {
    id: 'petra-orsagova',
    name: 'Petra Orságová',
    role: 'Co-founder',
    company: 'AI & Business Lab cz',
    photo: 'https://framerusercontent.com/images/i7aSEFDLCse7MHsCkR9lcrHcCCQ.jpeg?scale-down-to=512',
    text: {
      cs: 'Už několikrát jsme měli to potěšení přivítat Denisu ve Startovárně Ostrava a pokaždé je to jízda plná praktických tipů, inspirace a nových pohledů na svět AI. Její nadšení pro téma je nakažlivé. Denisa mluví o AI tak, že vás to začne bavit dřív, než si stihnete otevřít notebook. Vysvětlí, ukáže, zopakuje. Každá otázka je pro ni další šance, jak vás pro AI nadchnout. A funguje to. Děkujeme a těšíme se na pokračování.',
      en: 'We have had the pleasure of welcoming Denisa to Startovárna Ostrava several times and each time it is a ride full of practical tips, inspiration and new perspectives on the world of AI. Her enthusiasm for the topic is contagious. Denisa talks about AI in such a way that you start to enjoy it before you even have time to open your notebook. She explains, shows, repeats. Every question is another chance for her to get you excited about AI. And it works. Thank you and we look forward to continuing.'
    }
  }
];
