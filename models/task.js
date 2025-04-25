class Task {
    constructor() {
      this.tasks = {
        'easy': {
          'title': 'Grunnleggende Linux-kommandoer',
          'subtitle': 'Lett vanskelighetsgrad',
          'learning_goals': 'Lære grunnleggende navigasjon og filhåndtering i Linux terminal',
          'description': 'I denne oppgaven skal du utføre grunnleggende kommandoer i Linux-terminalen for å navigere mellom mapper, opprette filer og mapper, samt vise innhold i filer.',
          'purpose': 'Hensikten er å bli komfortabel med grunnleggende terminalbruk som er essensielt for all IT-drift.',
          'learning_outcome': 'Du vil lære de mest brukte Linux-kommandoene som alle IT-profesjonelle bør beherske.',
          'personal_learning': 'Ved å lage denne oppgaven har jeg måttet reflektere over hvilke kommandoer som faktisk er mest nyttige og relevante i daglig arbeid.',
          'criteria': [
            '1 poeng: Grunnleggende navigasjon og filvisning',
            '2 poeng: Oppretting av filer og mapper',
            '3 poeng: Redigering av filer fra terminalen',
            '4 poeng: Bruk av grep og andre søkefunksjoner',
            '5 poeng: Riktig dokumentasjon av alle kommandoer'
          ],
          'content': `
            <h4>Del 1: Navigasjon</h4>
            <ol>
              <li>Logg inn på en Linux-terminal</li>
              <li>Vis hvilken mappe du befinner deg i med <code>pwd</code> kommandoen</li>
              <li>List opp innholdet i mappen med <code>ls -la</code></li>
              <li>Naviger til /tmp mappen med <code>cd /tmp</code></li>
              <li>Opprett en ny mappe med navnet "oppgave1" ved å bruke <code>mkdir oppgave1</code></li>
            </ol>
            
            <h4>Del 2: Filhåndtering</h4>
            <ol>
              <li>Naviger inn i "oppgave1" mappen</li>
              <li>Opprett en tekstfil med navnet "info.txt" ved å bruke <code>touch</code> eller <code>nano</code></li>
              <li>Legg til teksten "Dette er en test" i filen</li>
              <li>Vis innholdet i filen med <code>cat</code>, <code>less</code> eller <code>more</code></li>
              <li>Kopier filen til "info_backup.txt" med <code>cp</code> kommandoen</li>
              <li>List opp alle filer i mappen med detaljert informasjon ved å bruke <code>ls -la</code></li>
            </ol>
            
            <h4>Del 3: Søk og filbehandling</h4>
            <ol>
              <li>Opprett en ny fil med navnet "data.txt" som inneholder minst 10 linjer med tekst</li>
              <li>Bruk <code>grep</code> kommandoen for å søke etter et ord i filen</li>
              <li>Bruk <code>wc</code> kommandoen for å telle antall linjer i filen</li>
              <li>Slå sammen begge filene til en ny fil ved å bruke <code>cat</code> og redirect (>)</li>
            </ol>
          `
        },
        'medium': {
          'title': 'Node.js-applikasjon med MVC-struktur',
          'subtitle': 'Middels vanskelighetsgrad',
          'learning_goals': 'Forstå og implementere MVC-struktur i en Express-applikasjon med dynamisk innhold',
          'description': 'I denne oppgaven skal du lage en liten Node.js-applikasjon med Express, EJS for visning, og bruke en tydelig skille mellom Model, View og Controller.',
          'purpose': 'Hensikten er å få praktisk erfaring med hvordan man bygger organiserte og skalerbare webapplikasjoner med MVC-pattern.',
          'learning_outcome': 'Du vil lære hvordan strukturert kodestruktur gjør det enklere å utvide og vedlikeholde kode, og hvordan data flyter gjennom appen fra model til view.',
          'personal_learning': 'Jeg har lært hvor mye klarere og ryddigere applikasjoner blir når man følger MVC-prinsippene.',
          'criteria': [
            '1 poeng: Opprettet riktig mappestruktur (models, views, controllers)',
            '2 poeng: Dynamisk visning med EJS',
            '3 poeng: Riktig bruk av ruter og controller-metoder',
            '4 poeng: Bruk av enkle modeller til å hente eller lagre data',
            '5 poeng: Applikasjonen fungerer fullstendig og er lett å forstå'
          ],
          'content': `
            <h4>Del 1: Oppsett av prosjektstruktur</h4>
            <ol>
              <li>Lag en ny mappe og initialiser prosjektet med <code>npm init</code></li>
              <li>Installer <code>express</code> og <code>ejs</code></li>
              <li>Lag mappene <code>models</code>, <code>views</code>, og <code>controllers</code></li>
              <li>Lag en enkel routing-fil (f.eks. <code>routes.js</code>) og koble til controller</li>
            </ol>
        
            <h4>Del 2: Dynamiske visninger med EJS</h4>
            <ol>
              <li>Lag en <code>views/home.ejs</code> som henter data fra controller</li>
              <li>Lag en layout hvor header og footer inkluderes som partials</li>
              <li>Vis dynamisk informasjon fra modellen i EJS</li>
            </ol>
        
            <h4>Del 3: Controllers og Models</h4>
            <ol>
              <li>Lag en enkel model som returnerer en liste med oppgaver (hardkodet)</li>
              <li>Lag en controller som henter data fra modellen og sender det til view</li>
              <li>Legg til en ekstra side for å vise detaljer om en spesifikk oppgave</li>
            </ol>
          `
        },
        'hard': {
          'title': 'Bygg et dynamisk ticketsystem i Node.js',
          'subtitle': 'Vanskelig vanskelighetsgrad',
          'learning_goals': 'Lage et funksjonelt ticketsystem med full CRUD-funksjonalitet, ved hjelp av Express, EJS og enkle datamodeller.',
          'description': 'Du skal lage et system der brukere kan sende inn supportsaker (tickets), og disse kan vises, redigeres og slettes. Bruk EJS for frontend, og oppbevar data i minne (array eller JSON-fil).',
          'purpose': 'Hensikten er å forstå hvordan man bygger en dynamisk og interaktiv applikasjon med flere ruter, brukerhandlinger og dataflyt.',
          'learning_outcome': 'Du vil lære hvordan man håndterer skjemaer, viser dynamiske lister, redigerer innhold og oppdaterer visninger basert på brukerinput.',
          'personal_learning': 'Å bygge et helt system fra bunnen av gir en dypere forståelse for samspill mellom frontend og backend.',
          'criteria': [
            '1 poeng: Opprette tickets med et skjema',
            '2 poeng: Vise en liste over alle tickets',
            '3 poeng: Kunne vise detaljer om én ticket',
            '4 poeng: Kunne redigere og slette tickets',
            '5 poeng: God bruk av EJS, riktig datalagring og ryddig mappestruktur (MVC)'
          ],
          'content': `
            <h4>Del 1: Oppsett av prosjekt</h4>
            <ol>
              <li>Initialiser prosjektet og installer <code>express</code> og <code>ejs</code></li>
              <li>Lag en <code>models/ticket.js</code> med array-baserte tickets (ID, tittel, beskrivelse, status)</li>
              <li>Lag en controller med metoder for <code>listTickets()</code>, <code>getTicket(id)</code>, <code>createTicket()</code>, <code>updateTicket()</code>, <code>deleteTicket()</code></li>
            </ol>
        
            <h4>Del 2: Lag views</h4>
            <ol>
              <li>Lag en EJS-side for å vise alle tickets (<code>tickets/index.ejs</code>)</li>
              <li>Lag et skjema for å opprette ny ticket</li>
              <li>Lag en detaljside for én ticket</li>
              <li>Legg til knapper/lenker for redigering og sletting</li>
            </ol>
        
            <h4>Del 3: Dynamisk funksjonalitet</h4>
            <ol>
              <li>Bruk POST/GET for å håndtere skjema og actions</li>
              <li>Implementer redigering med preutfylt skjema</li>
              <li>Lag et slettingssystem (bekreftelse + sletting)</li>
            </ol>
          `       
        }
      };
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    getTaskByDifficulty(difficulty) {
      return this.tasks[difficulty] || null;
    }
  }
  
  module.exports = new Task();