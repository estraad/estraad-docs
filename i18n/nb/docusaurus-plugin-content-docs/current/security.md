---
id: security
title: Sikkerhet og Data
sidebar_label: Sikkerhet og Data
---

## Oversikt

Estraad er en 3D, sosial samhandlingsplatform hvor brukere møtes inne i et virutelt rom og kan arbeide og kommunisere sammen.

Data brukes for å styre tilgang (konti og autentisering), synkronisere data og opplevelser i sanntid, kommunikasjon, samt å dele innhold som du ønsker å bruke i rommet.

## Lagret Data 

Estraad lagrer minimalt med data i våre servere. All data i databasene og i backups er kryptert "at rest". All infrastruktur kjører på AWS-tjenester i region "eu-west-1" Europa - Irland. 

Alle rom i Estraad kjører på et delt miljø tilgjengelig på meet.estraad.com, og alle rom kobles på de samme serverene. Vi har også anledning til å kjøre hele infrastrukturen isolert på eget separat AWS-miljø dersom kundene ønsker dette.

### Kontoer 

Brukerkonto benyttes til å logge brukere inn i tjenesten. Platformen bruker ikke passord, men sender en lenke til din epost for å verifisere hvem som logger inn. Den eneste kontoinformasjonen som lagres i våre databaser er en hash av epost-adressen og datoen den ble laget. 

Fordi epostadresser hashes, kan ikke vanlige adminsitratorer lese epostadressene i systemet, men de kan søke den opp dersom de vet adressen.

### Rom 

Brukere kan dele innhold med andre inne i et rom. Følgende innhold kan lastes opp i et rom hvis rommet er satt opp med rettigheter som tillater det:

- Bilder 

- Video 

- Lyd 

- PDF-dokumenter

- 3D-Modeller 

Filer som er lastet opp i et rom er krypterte, og krypteringsnøkkelen deles med alle i rommet. Dette betyr at filene ikke kan sees av andre utenfor rommet med mindre de har krypteringsnøkkelen.

Brukeren kan Låse og Låse Opp innhold inne i et rom. Når et objekt låses, vil krypteringsnøkkelen lagres i databasen sammen med filen, og deles med brukere når de blir med i rommet, slik at de kan se filen. Når en bruker forlater et rom, vil alle ulåste objetkter merkes som "forlatte", og vil ikke lenger være tilgjengelig. Innen 72 timer er de slettet permanent.

All data er kryptert under overføring via TLS.

## Dataoverføring inne i et rom

For å få til en sanntids-opplevelse som deles med andre brukere, blir følgende komponenter synkronisert med alle brukere inne i et rom:

| Felt         | Type          | Kontekst  |  3D-Miljø  |  2D-Menyer  | 
| ------------- | ------------- | -------- | ---------------- |  --------- |
| avatarSrc     | Peker til 3D-Modell | Andre kan se avataren din   | Show model | Brukes ikke |
| hairSrc       | Peker til 3D-Modell |     | Andre kan se frisyren til avataren din | Brukes ikke | 
| accessorySrc  | Peker til 3D-Modell |     | Andre kan se tilbehøret til avataren din | Brukes ikke |
| bodyAccessorySrc  | Peker til 3D-modell |  | Show model | Not used |
| handRaised  | Boolsk Variabel(sant/usant)   | Lar andre brukere vite at du har et spørsmål | Ikon over avataren | Ikon ved siden av navn i navnelisten | 
| muted  | Boolsk Variabel(sant/usant)  | La andre vite at din mikrofon er skrudd av/på | Stans og start animasjon av avatarenes munn | Ikon ved siden av navnet i brukerlisten | 
| displayName  | Tekst    | La andre brukere vite navnet ditt | Vise navnet over avataren din | Navn i brukerlisten og i chatteloggen | 
| companyName  | Tekst (Valgfri)    | La andre vite firma / organisasjon | Vises over avataren din | Vises i undermenyen i brukerlisten | 
| identityName  | Tekst    | Settes av en administrator for å identifisere spesielle brukere (som en tittel ("Utvikler") eller rolle ("Foredragsholder")) | Vis tekst over avataren | Not used |
| isOwner  | Boolsk Verdi (sant/usant) | Brukes internt for administratorer | Ikke i bruk | Ikke i bruk |



### Avatarer 
- Posisjon 
- Rotasjon 
- Skalering 
- Venstre Hånd rotasjon og synlighet (Kun når man bruker VR-headset med håndkontroller)
- Høyre hånd rotasjon og synlighet (Kun når man bruker VR-headset med håndkontroller)

## Kommunikasjon  

For at brukere skal kunne kommunisere, deles følgende data over WebRTC:
- Mikrofondata (Krever tillatelse igjennom nettleseren for å benytte mikrofon. Data overføres ikke når du stenger mikrofonen med "Mute" funksjonaliteten.) 

- Webkamera-data (Krever tillatelse igjennom nettleseren) 

- Skjermdelings-data (Krever tillatelse igjennom nettleseren) 

