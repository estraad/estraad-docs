---
id: video
title: Video-spesifikasjoner
sidebar_label: Video-spesifikasjoner
---

Denne artikkelen beskriver formater og spesifikasjoner for å bruke videofiler i Estraad.
Dokumentasjonen inneholder teknisk informasjon og fagbegrep, og er rettet mot teknikere og andre med ansvar for video, lyd og streaming.

## Inne i rom
#### Video
- MP4 Filformat
- Kombinert filstørrelse bør ikke være over 40mb. Deltakerenes enheter vil angi hvilken maksgrense du bør bruke. Som eksempel bør du ikke benytte store videofiler i et rom der det er brukere på mobildata.
- Estraad støtter både flat og 360 ekvirektangulær projisering av både bilder og video..
  - For flat (vanlig 2D) video anbefaler vi at du bruker 16:9 størrelsesforhold.
- Vi kan enkelt endre og tilpasse lydvolum som posisjonell eller stereo, og også skreddersy modeller for distansebasert kommunikasjon (hvilken retning, hvor mye avtar lyden, lineær og eksponentiell reduksjon, etc.).

#### HLS Live Streaming (Strømming av video)
Vi tilbyr en pålitelig og robust implementering av live video inn i ett eller flere rom og miljøer. Vi støtter hvilken som helst kvalitet og oppsett så lenge systemet kan dytte streamen inn til vår RTMP endepunkt.

- Vi kan tilby RTMP endepunkter med m3u8 spilleliste.
- Innput for RTMP-stream bør være 1080p i så høy kvalitet som mulig.
  - Hvis man bruker 4K vil output automatisk konverteres til x265 med MediaLive, som ikke er tilgjengelig i vår HLS-avspiller. Kvalitetsforbedringene ved bruk av 4K ansees ikke som "verd det" da oppløsning og skjermforohld oppleves annerledes i 3D-miljø enn i tradisjonelle løsninger.
  - Ved å bruke så høy kvalitet som mulig, kan vi benytte oss av Adaptive Bitrate Streaming, som vil gi brukerene høyeste kvalitet uten hakking, som passer deres nettverkshastighet.


## Utenfor rom
Som for eksempel eksterne sider, landingssider, o.l.

#### Video On Demand / Tradisjonell løsning
Vi benytter Vimeo som leverandør av videotjenester (VOD). Vimeo støtter de fleste formater.

Vennligst se Vimeo-dokumentasjon på Engelsk here:
https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload#h_01EDWFFX7XE84PSAJE5JW87B7R

####  Andre teknologier
Vi har også en separat Spørsmål og Svar funksjon for arrangementer som krever det.
