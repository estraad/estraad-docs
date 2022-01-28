---
id: video
title: Videospezifikationen
sidebar_label: Videospezifikationen
---

Dieser Artikel beschreibt die Formate und Spezifikationen für die Verwendung von Videodateien in Estraad.
Die Dokumentation enthält technische Informationen und Fachkonzepte und richtet sich an Techniker und andere Verantwortliche für Video, Audio und Streaming.

## In Räumen
#### Video
- MP4 Dateiformate
- Die kombinierte Dateigröße sollte 40 MB nicht überschreiten. Die Teilnehmermenge und ihre Netzwerkvorraussetzungen sind letztendlich ausschlaggebend, welche Höchstgrenze Sie verwenden sollten. Beispielsweise sollten Sie keine großen Videodateien in einem Raum verwenden, in dem sich Nutzer mit befinden die mobile Netzwerke mit Datenmengenbegrenzung nutzen.
- Estraad unterstützt sowohl die flache als auch die äquirektanguläre 360-Projektion von Bildern und Videos.
  - Für flache (normale 2D) Videos empfehlen wir die Verwendung des Seitenverhältnisses 16:9.
- Wir können die Tonlautstärke einfach als Positions- oder Stereolautstärke ändern und anpassen und auch Modelle für die entfernungsbasierte Kommunikation anpassen (in welche Richtung, wie stark der Ton abnimmt, lineare und exponentielle Reduzierung usw.).

#### HLS Live Streaming (Video Streaming)
Wir bieten eine zuverlässige und robuste Implementierung von Live-Video in einem oder mehreren Räumen und Umgebungen. Wir unterstützen jegliche Qualität und Konfiguration, solange das System den Stream in unseren RTMP-Endpunkt pushen kann.

- Wir können RTMP-Endpunkte mit m3u8-Wiedergabeliste anbieten.
- Eingang für RTMP-Stream sollte 1080p in möglichst hoher Qualität sein.
  - Wenn Sie 4K verwenden, wird die Ausgabe mit MediaLive automatisch in x265 konvertiert, was in unserem HLS-Player nicht verfügbar ist. Die Qualitätsverbesserungen bei der Verwendung von 4K werden als nicht "lohnend" angesehen, da Auflösung und Bildschirmbedienungen in einer 3D-Umgebung anders wahrgenommen werden als bei herkömmlichen Lösungen.
  - Durch die Verwendung einer möglichst hohen Qualität, können wir adaptives Bitraten-Streaming verwenden, welches Nutzern basierend auf ihrer Netzwerkgeschwindigkeit die höchste Qualität ohne Unterbrechungen bietet.


## Außerhalb der Räume
Wie externe Seiten, Landingpages etc.

#### Video On Demand / Herkömmliche Lösung
Wir nutzen Vimeo als Anbieter von Videodiensten (VOD). Vimeo unterstützt die meisten Formate.

Bitte sehen Sie sich die Vimeo-Dokumentation in englischer Sprache hier an:
https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload#h_01EDWFFX7XE84PSAJE5JW87B7R

####  Andere Technologien
Wir haben auch eine separate Frage-und-Antwort-Funktion für Veranstaltungen, die dies erfordern.
