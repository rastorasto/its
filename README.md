# Projekt 1 - Testování a dynamická analýza 2025/26

* Autor, revize: Aleš Smrčka, 2026-03-19
* Název projektu: Návrh testů aplikace pro správu členů klubu
* Přílohy: (žádné)

## Cíl projektu

Cílem projektu je návrh testovací sady pro regresní testy webové aplikace:

1. Seznámit se s testovanou aplikací formou exploratorních testů (tj. seznámit se s aplikací "klikáním" v ní a používat vlastní zkušenosti). V sekci SUT níže je popsána část aplikace, na kterou by testy měly cílit.
2. Zvolit a navrhnout, co je cílem testů (které části povrchově do šířky nebo hloubkově do detailu budou testované).
3. Nastudovat chováním řízený vývoj (Behaviour-driven development, BDD).
4. Vypracovat scénáře BDD pro testování zadané oblasti testované aplikace. Podrobné pokyny jsou níže.

Na 1. projekt navazuje 2. projekt, ve kterém budete implementovat vámi navržené testy pomocí nástroje Cypress [1]. Toto je třeba zohlednit při tvorbě testovacích scénářů BDD. Na hodnocení prvního projektu bude mít největší vliv váš výběr testovaných částí a kvalita vypracování testovacích scénářů. Není potřeba navrhnout komplikované testy nebo velký počet testů, ale efektivní testy, které s ohledem na svoji velikost pokryjí zajímavě velkou část aplikace.

## Testovaná aplikace

Testovaný systém je webová aplikace, která slouží pro správu členů sportovního
klubu. Aplikace je rozdělená na frontend a backend s lokální databází. Mezi
činnosti, které nabízí, patří správa týmů, správa členů, jejich zařazení do
týmů, správa uživatelů a vazba na členy klubu, ale také tvorba požadavků
pravidelných poplatků a kontrola s ohledem na výpis bankovního účtu.

## Testovací cíle

Cílem projektu je **navrhnout** (nikoliv implementovat) regresní testy, které by měly zaručit, že po manipulaci webové aplikace (například její aktualizace) nevznikl problém. Tedy, že se nezmění hlavní funkcionalita pro konzumenty webu.

Mezi aktivity webu, **které je třeba testovat**, patří:

1. Správa týmů, členů, vyhledání a filtrace.
2. Správa uživatelů a jejich přiřazení ke členům.
3. Oprávnění jednotlivých rolí uživatelů.
4. Zadání požadovaných plateb a jejich párování na ručně provedené platby.

## Netestovaná funkcionalita

Nezabývejte se dalšími činnostmi, které aplikace nabízí. V testech nezahrnujte činnosti pro objednávky e-shopu, příprava a posílání emailů, import bankovních výpisů, import členů.

## Pokyny k vypracování testovacích scénářů

Scénáře BDD vypracujte v souborech s příponou .feature. Syntaxi jazyka, význam příkazů a nejlepší praktiky pro psaní scénářů nastudujte dle dokumentace [2], doporučené četby a vlastních zdrojů. Minimální počet scénářů není stanoven. Zohledněte však jejich rozsah, protože ve druhém projektu budete implementovat odpovídající testovací případy pomocí automatizovaných testů GUI. Testování GUI bude tématem dalších přednášek. **Scénáře pište v anglickém jazyce.**

Soubory se scénáři musí doprovázet report v souboru `README.md`, který bude obsahovat stručný popis testovaných vlastností **ve formě matice pokrytí**.

- Cílem souboru je seznámit čtenáře s rozsahem testovaných vlastností (dále jen *artefakty*) a vztahem těchto vlastností k jednotlivým testům a souborům popisující scénáře BDD.
- Soubor `README.md` bude ve formátu Markdown. Používejte co nejméně formátování, ideálně tedy variantu strict. Ověřit validitu textu ve formátu Markdown můžete na konvertoru [pandoc](https://pandoc.org/try/). Jazyk textu může být CZ/SK/EN, vše UTF-8.
- Matice pokrytí, které testy pokrývají které testované vlastnosti, bude ve formě 2 tabulek. První tabulka popisuje pokryté strukturální artefakty (webové stránky aplikace nebo ovládací prvky), druhá činnosti (aktivity, ověření vlastností). Sloupce v tabulkách jsou číselně označené testy. Pozn. obě tabulky musí mít tedy stejný počet sloupců.

| Page | 1 | 2 | 3 | ... |
|----------|---|---|---|-----|
| Page XYZ1 | x | x |   |     |
| Page XYZ2 | x |   | x |     |
| Page ... |   |   | x |  x   |


| Activities  | 1 | 2 | 3 | ... |
|----------|---|---|---|-----|
| Setting mapping OPQR to ABCD | x |  | x | |
| Deleting XYZ | x |  | x | |
| Doing_something ... | | | | x |
| Checking: relationAToB | x |  |  |  x  |
| Checking: relationXtoY |   | x | x |    |
| Checking: A covers B | x | x | x |    |
| Checking ... | | | | x |

- Matici pokrytí bude doplňovat matice implementovaných testů, tj. který test je pospán ve kterém souboru s BDD scénářem.

| Feature file | 1 | 2 | 3 | ... |
|----------|---|---|---|-----|
| file1.feature | x | x | | |
| file2.feature |   |   | x | x |

- Šablonu pro report `README.md` najdete v repozitáři s webovou aplikací:
[https://pajda.fit.vutbr.cz/smrcka/its-2026/-/blob/master/projekt1/template/README.md](https://pajda.fit.vutbr.cz/smrcka/its-2026/-/blob/master/projekt1/template/README.md)

## Způsob odevzdání

Soubory `.feature` a `README.md` zabalte do archivu `.zip` (bez vnitřní adresářové struktury). Archiv odevzdejte prostřednictvím informačního systému.

## Hodnocení

Na výsledné hodnocení bude mít vliv počet scénářů, jejich délka v počtu kroků nebo unikátnost klazulí. Tyto metriky však samostatně nejsou dostatené pro ohodnocení rozumné testovací sady. Hodnocení tedy zahrne také srozumitelnost testovacích scénářů a matice pokrytí.

## Webová aplikace Champ

Testovanou aplikaci jako webovou aplikaci můžete rozjet na svém počítači pomocí PaaS technologie Docker (kontejnerová služba mimo jiné zajišťující také isolaci běžících aplikací). Pro tento účel máte k dispozici obraz dostupný zde [https://hub.docker.com/r/asmrcka/its2026app](https://hub.docker.com/r/asmrcka/its2026app).

1. Nainstalujte si [docker](https://docs.docker.com/get-started/) a [docker-compose](https://docs.docker.com/compose/).
2. Stáhněte si předpis pro běh kontejnerů potřebných pro testovanou aplikaci:
```
    curl -sSL https://pajda.fit.vutbr.cz/smrcka/its-2026/-/raw/master/projekt1/docker-compose.yml \
        >docker-compose.yml
```
3. Spusťte kontejnery:
```
    docker-compose up -d
```
Bez parametru -d uvidíte logy. První spuštění může trvat delší dobu (stahuje se
potřebný obraz).

4. Sledovat činnost aplikace lze pomocí logů:
```
    docker-compose logs -f
```
5. Ve webovém prohlížeči je aplikace dostupná na adrese:
   [http://localhost:8000/](http://localhost:8000/)
6. Administrativní rozhraní je dostupné po webovém přihlášení. Login a heslo je "`admin@example.cz`" a "`admin`".
7. Pro ukončení běhu a opětovný start použijte:
```
    docker-compose stop
    docker-compose start
```
8. Odstranění aplikace včetně dat lze pomocí:
```
    docker-compose down
```

Pokud máte problém aplikaci zprovoznit lokálně, napište mi [email](mailto:smrcka@fit.vut.cz).


## Literatura

[1] Cypress. [https://www.cypress.io/](https://www.cypress.io/)

[2] Syntaxe Gherkin pro psaní BDD.
[https://cucumber.io/docs/gherkin/reference/](https://cucumber.io/docs/gherkin/reference/)

[3] Behaviour-Driven Development. [https://cucumber.io/docs/bdd/](https://cucumber.io/docs/bdd/)

[4] Nejlepší praktiky BDD. [https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/)

[5] Antivzory BDD. [https://cucumber.io/docs/guides/anti-patterns/](https://cucumber.io/docs/guides/anti-patterns/)
