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
          'title': 'Docker-containerisering av Node.js webapplikasjon',
          'subtitle': 'Middels vanskelighetsgrad',
          'learning_goals': 'Lære å containerisere en Node.js webapplikasjon ved hjelp av Docker',
          'description': 'I denne oppgaven skal du opprette en Dockerfile for en Node.js webapplikasjon, bygge et Docker-image og kjøre containeren. Du skal også konfigurere container-nettverk og volumer for persistente data.',
          'purpose': 'Hensikten er å forstå hvordan moderne applikasjoner kan containeriseres for konsistent utrulling på ulike miljøer.',
          'learning_outcome': 'Du vil lære hvordan Docker kan brukes til å pakke applikasjoner med alle avhengigheter og kjøre dem isolert og portabelt.',
          'personal_learning': 'Gjennom å lage oppgaven har jeg fått repetert beste praksis for Docker-containerisering og spesielt sikre Docker bilder.',
          'criteria': [
            '1 poeng: Grunnleggende Dockerfile som bygger',
            '2 poeng: Containeren kjører webapplikasjonen',
            '3 poeng: Konfigurert volum for persistente data',
            '4 poeng: Konfigurert nettverk og portvideresending',
            '5 poeng: Optimalisert Docker-image med flertrinns bygging'
          ],
          'content': `
            <h4>Oppgavebeskrivelse: Dockerisering av Node.js applikasjon</h4>
            
            <p>Du har en enkel Node.js Express-applikasjon som skal containeriseres med Docker. Applikasjonen har følgende filstruktur:</p>
            
            <pre>myapp/
  ├── app.js
  ├── package.json
  ├── package-lock.json
  ├── public/
  │   └── style.css
  └── views/
      └── index.ejs</pre>
            
            <h4>Del 1: Grunnleggende Dockerfile</h4>
            <ol>
              <li>Opprett en Dockerfile i rotmappen til applikasjonen</li>
              <li>Velg et passende base-image for Node.js applikasjonen</li>
              <li>Konfigurer arbeidsmappen i containeren</li>
              <li>Kopier package.json og package-lock.json</li>
              <li>Kjør npm install for å installere avhengigheter</li>
              <li>Kopier resten av applikasjonsfilene</li>
              <li>Angi kommandoen for å starte applikasjonen</li>
              <li>Eksponere riktig port</li>
            </ol>
            
            <h4>Del 2: Bygge og kjøre containeren</h4>
            <ol>
              <li>Bygg Docker-image med et passende navn og tag</li>
              <li>Kjør containeren med riktig port-mapping for å få tilgang til applikasjonen</li>
              <li>Verifiser at applikasjonen kjører ved å besøke den i nettleseren</li>
            </ol>
            
            <h4>Del 3: Nettverk og volumer</h4>
            <ol>
              <li>Opprett et Docker-volum for persistente data</li>
              <li>Monter volumet i containeren for å lagre applikasjonsdata</li>
              <li>Konfigurer et Docker-nettverk for kommunikasjon mellom flere containere</li>
              <li>Kjør containeren på det nye nettverket</li>
            </ol>
            
            <h4>Del 4: Optimalisering</h4>
            <ol>
              <li>Forbedre Dockerfile med flertrinns bygging (multi-stage build)</li>
              <li>Implementer beste praksis for sikkerhet (kjøre som ikke-root bruker)</li>
              <li>Optimaliser image-størrelsen ved å fjerne unødvendige filer</li>
              <li>Implementer Docker Compose for enklere orkestrering</li>
            </ol>
          `
        },
        'hard': {
          'title': 'CI/CD Pipeline for automatisert testing og utrulling av Node.js applikasjon',
          'subtitle': 'Vanskelig vanskelighetsgrad',
          'learning_goals': 'Implementere en komplett CI/CD-løsning for automatisert testing og utrulling av en Node.js applikasjon',
          'description': 'I denne oppgaven skal du sette opp en komplett CI/CD-pipeline med GitHub Actions eller GitLab CI. Pipelinen skal automatisere testing, bygge Docker-images, og rulle ut applikasjonen til en testserver når kode pushes til repository.',
          'purpose': 'Hensikten er å forstå moderne utviklingsprosesser som sikrer kontinuerlig integrasjon og leveranse av kvalitetssikret kode.',
          'learning_outcome': 'Du vil lære hvordan automatiserte pipelines kan støtte utviklings- og driftsprosesser ved å eliminere manuelle feil og sikre konsistente leveranser.',
          'personal_learning': 'Gjennom å lage denne oppgaven har jeg fordypet meg i de ulike aspektene ved moderne CI/CD, inkludert sikkerhetsscanning og infrastruktur som kode.',
          'criteria': [
            '1 poeng: Grunnleggende CI/CD-konfigurasjon',
            '2 poeng: Automatiserte tester kjører ved push',
            '3 poeng: Docker-image bygges og pushes til registry',
            '4 poeng: Automatisk utrulling til test-miljø',
            '5 poeng: Implementert sikkerhetstesting og staging/prod miljøer med godkjenning før produksjonsutrulling'
          ],
          'content': `
            <h4>Oppgavebeskrivelse: CI/CD Pipeline for Node.js applikasjon</h4>
            
            <p>I denne oppgaven skal du implementere en komplett CI/CD-pipeline for en Node.js applikasjon med GitHub Actions eller GitLab CI. Målet er å automatisere hele prosessen fra kodeendring til utrulling, inkludert testing og kvalitetssikring.</p>
            
            <h4>Del 1: Oppsett av repository</h4>
            <ol>
              <li>Opprett et GitHub eller GitLab repository for en enkel Node.js Express-applikasjon</li>
              <li>Skriv grunnleggende tester for applikasjonen med Jest eller Mocha</li>
              <li>Implementer linting med ESLint for kodekvalitet</li>
              <li>Opprett en Dockerfile for å containerisere applikasjonen</li>
            </ol>
            
            <h4>Del 2: Konfigurasjon av CI-pipeline</h4>
            <ol>
              <li>Opprett en workflow-fil (.github/workflows/ci.yml for GitHub Actions eller .gitlab-ci.yml for GitLab)</li>
              <li>Konfigurer automatisk kjøring av linting</li>
              <li>Konfigurer automatisk kjøring av tester</li>
              <li>Konfigurer byggetrinn for applikasjonen</li>
              <li>Oppsett av Docker-image bygging</li>
            </ol>
            
            <h4>Del 3: Konfigurasjon av CD-pipeline</h4>
            <ol>
              <li>Konfigurer pushing av Docker-image til et registry (DockerHub, GitHub Packages eller GitLab Registry)</li>
              <li>Sett opp en testserver (kan være lokal VM eller skytjeneste)</li>
              <li>Konfigurer automatisk utrulling til testserver ved vellykkede tester</li>
              <li>Implementer en enkel metode for å verifisere at utrullingen var vellykket</li>
            </ol>
            
            <h4>Del 4: Avanserte funksjoner</h4>
            <ol>
              <li>Implementer branch-basert workflow (f.eks. dev, staging, production)</li>
              <li>Konfigurer sikkerhetsskanning av kode og avhengigheter</li>
              <li>Implementer automatisert versjonskontroll og tagging</li>
              <li>Konfigurer manuell godkjenning for produksjonsutrulling</li>
              <li>Implementer rollback-mulighet ved feil</li>
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