To jest czysty projekt startowy NextJS z customowym stackiem technologicznym.


## Technologie:
- [Next.js 13.4](http://nextjs.org/): Jest to najnowsza wersja Next.js, która oferuje wydajne i łatwe w użyciu narzędzia do tworzenia aplikacji na serwerze i po stronie klienta. Umożliwia również statyczne i serwerowe renderowanie stron.
- [Typescript 5](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): TypeScript to nadzbiór JavaScript, który dodaje statyczne typowanie do języka. Ułatwia to debugowanie kodu i zapobiega pewnym błędom podczas kompilacji.
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss): Jest to narzędzie do tworzenia interfejsów użytkownika, które umożliwia tworzenie niestandardowych projektów bez opuszczania plików HTML. Jest modularny i wysoce konfigurowalny.
- [React 18](htttp://reactjs.org): Jest to najnowsza wersja popularnej biblioteki do tworzenia interfejsów użytkownika. Umożliwia tworzenie dynamicznych interfejsów użytkownika za pomocą komponentów.
- Jest: Jest to biblioteka do testowania JavaScript, która jest łatwa w konfiguracji i zapewnia pełne pokrycie kodu.
- React Testing Library: Jest to zestaw narzędzi do testowania komponentów React, które symulują zachowania użytkownika, a nie szczegóły implementacji.
- Eslint: Jest to narzędzie do analizowania kodu JavaScript pod kątem błędów i niezgodności ze stylami programowania.
- Prettier: Jest to narzędzie do formatowania kodu, które automatycznie formatuje kod JavaScript, aby był bardziej czytelny i zgodny z ustalonymi zasadami stylu.
- Husky: Jest to narzędzie, które pozwala na automatyczne uruchamianie skryptów (takich jak testy lub linting) przed każdym zatwierdzeniem git, co pomaga zapobiegać wprowadzaniu błędów do kodu.
- Lint-staged: Jest to narzędzie, które pozwala na uruchamianie linterów (takich jak ESLint) tylko na plikach, które są w stanie "staged" w git, co przyspiesza proces linting.

## Architektura

Projekt oparty o typescript w trybie strict z dodoatkowymi regułami zwiekszajacymi bezpieczeństwo kodu w fazie kompilacji.

### Struktura plików:
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).
- Nextjs App router

### Zarządzania stanem aplikacji:
- React Context API: do modułowego zarządzania stanem aplikacji i ogólnych funkcjonalności
- XState: do zarządzania stanem aplikacji w bardziej złożonych przypadkach użycia


### Proponowane użycie bibliotek do komunikacji z api:
Biblioteki nie są zainstalowane w projekcie, ale są proponowane do użycia.
#### REST API:
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://github.com/axios/axios)
#### GraphQL:
- [Zeus](https://github.com/graphql-editor/graphql-zeus)

## Getting Started
Projekt oparty na [pnpm](https://pnpm.io/). Pnpm jest szybszy i lżejszy od npm i yarn.
### Pierwsze uruchomienie projektu:
#### Inicjalizacja projektu i zależności:
```bash
pnpm install
```
#### Uruchomienie projektu:
```bash
pnpm install
```
Domyślny adres [http://localhost:3000](http://localhost:3000) otworzyć w przeglądarce.

