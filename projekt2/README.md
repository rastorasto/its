# Zadání 2. projektu ITS 2025/26

* Autor, revize: Aleš Smrčka, 2026-04-09 
* Název projektu: GUI testy aplikace pro správu členů klubu
* Přílohy: docker-compose.yml

## Cíl

Vytvořte automatické testy (Cypress) pro vámi navrženou testovací sadu na základě BDD scénářů.

## Úkoly

### 1. Instalace a studium nástrojů

#### 1.1 Instalace npm a Cypress

Nainstalujte integrované prostředí pro tvorbu a spouštění testů Cypress.

- Nainstalujte [Node.js](https://nodejs.org/), resp. npm. Npm bývá typicky součástí oficiálních balíků Linuxových distribucí (např. nodejs-npm pro distribuce Fedora, npm pro Ubuntu). 
- Nainstalujte Cypress: [https://www.cypress.io/](https://www.cypress.io/)
- Ověřte instalaci spuštením cypress:

```
cypress open
```
nebo
```
npx cypress open
```
#### 1.2 Studium tvorby a spuštění testů

Nastudujte tvorbů end-to-end testů.

- [https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test)

### 2. Implementujte testy

Implementujte automatizované testy. Testy budou zahrnovat vámi navržené testy v testovacím plánu odevzdaném v prvním projektu. Předpokladem je spuštěná testovaná aplikace:

docker-compose.yml
```yml
services:
  champ:
    image: docker.io/asmrcka/its2026app:1
    restart: always
    ports:
      - "8000:8000"
    environment:
      CHAMP_APP_NAME: CHAMP Backend (docker compose)
      CHAMP_DATABASE_URL: sqlite+pysqlite:////tmp/champ.db
      CHAMP_SEED_DEMO_DATA: "true"
```

```
docker-compose up -d
```

- Implementované testy nemusí byt úplně stejné, jako testy popsané v návrhu testů v testovacím plánu.
- Testy budou samostatné a bez (automatické) vazby na .feature soubory. Jednotlivé kroky .feature souborů transformujte přímo do (několika) řádků kódu.
- Testy vyžadující nahrávání souborů nebo operace drag&drop implementovat nemusíte.
- Ověřte testy v headless režimu:

```
npx cypress run
```

### 3. Sepište report

Report `report.md` bude obsahovat následující části:

1. hlavičku (kdo, kdy, kontext),
2. stručný popis úprav testů (proč a čím se testy změnily oproti prvnímu projektu),
3. tabulku obsahující mapování BDD scénářů na zdrojové kódy.

Mapovací tabulka bude obsahovat soubor a číslo řádku, na kterém je první krok scénáře (Given), a soubor a číslo řádku, na kterém začíná daný test:

| Scenario file | Line | Cypress file | Line |
|---------------|------|--------------|------|
| editMembers.feature | 3 | editMembers.js | 33 |
| deleteMembers.feature | 7 | delMembers.js | 52 |
| ... | ... | ... | ... |

### 4. Odevzdání

Odevzdejte své řešení prostřednictvím archivu xLOGIN99.zip. Archiv bude obsahovat:

    -/                      kořenový adresář archivu
     +- report.md           report o testech
     +- cypress.config.js   konfigurace Cypress testů
     +- cypress/
        +- e2e/             soubory s kódem testů
        +- fixtures/        (nepovinné) nastavení fixtures
        +- support/         (nepovinné) soubory s kódem testů


Pro spuštění testů musí být úspěšně provedeny tyto kroky (za předpokladu existence souboru docker-compose.yml s definicí testované aplikace):


     $ unzip xLOGIN99.zip
     $ docker-compose up -d
     $ npx cypress run
     $ docker-compose down
