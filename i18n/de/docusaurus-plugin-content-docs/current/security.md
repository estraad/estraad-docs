---
id: security
title: Daten und Sicherheit
sidebar_label: Daten und Sicherheit
---

## Übersicht

Estraad ist eine soziale 3D-Interaktionsplattform, auf der sich Benutzer in einem virtuellen Raum treffen und gemeinsam arbeiten und kommunizieren können.

Daten werden verwendet, um den Zugang zu kontrollieren (Konten und Authentifizierung), Daten und Erfahrungen in Echtzeit zu synchronisieren, zu kommunizieren sowie Inhalte zu teilen, die Sie im Raum verwenden möchten.

## Gespeicherte Daten 

Estraad speichert minimale Daten auf unseren Servern. Alle Daten in den Datenbanken und in Backups werden „at rest“ verschlüsselt. Die gesamte Infrastruktur läuft auf AWS-Diensten in der „eu-west-1“-Region Europa – Irland.

Alle Räume in Estraad werden in einer gemeinsamen Umgebung ausgeführt, die unter meet.estraad.com verfügbar ist, und alle Räume sind mit denselben Servern verbunden. Wir haben auch die Möglichkeit, die gesamte Infrastruktur isoliert auf unserer eigenen separaten AWS-Umgebung zu betreiben, wenn Kunden dies wünschen.

### Konten 

Das Nutzerkonto wird verwendet, um Benutzer beim Dienst anzumelden. Die Plattform verwendet keine Passwörter, sondern sendet einen Link an Ihre E-Mail, um zu überprüfen, wer sich anmeldet. Die einzigen Kontoinformationen, die in unseren Datenbanken gespeichert sind, sind ein Hash der E-Mail-Adresse und das Erstellungsdatum.

Da E-Mail-Adressen gehasht werden, können normale Administratoren die E-Mail-Adressen im System nicht lesen, aber sie können sie nachschlagen, wenn sie die Adresse kennen.

### Raum 

Benutzer können Inhalte mit anderen innerhalb eines Raums teilen. Die folgenden Inhalte können in einen Raum hochgeladen werden, wenn der Raum mit den entsprechenden Berechtigungen eingerichtet ist:

- Bilder 

- Videos 

- Audio 

- PDF-dokumente

- 3D-Modelle

In einen Raum hochgeladene Dateien werden verschlüsselt und der Verschlüsselungsschlüssel wird mit allen im Raum geteilt. Das bedeutet, dass die Dateien nicht von anderen außerhalb des Raums eingesehen werden können, es sei denn, sie haben den Verschlüsselungsschlüssel.

Der Nutzer kann Inhalte in einem Raum sperren und entsperren. Wenn ein Objekt gesperrt ist, wird der Verschlüsselungsschlüssel zusammen mit der Datei in der Datenbank gespeichert und mit Nutzern geteilt, wenn sie den Raum beitreten, damit sie die Datei anzeigen können. Wenn ein Nutzer einen Raum verlässt, werden alle entsperrten Objekte als „aufgegeben“ markiert und sind nicht mehr verfügbar. Innerhalb von 72 Stunden werden sie endgültig gelöscht.

Alle Daten werden bei der Übertragung per TLS verschlüsselt.

## Datenübertragung innerhalb eines Raumes

Für ein Echtzeiterlebnis, das mit anderen Benutzern geteilt wird, werden die folgenden Komponenten mit allen Benutzern in einem Raum synchronisiert:

| Feld         | Typ          | Kontext  |  3D-Umgebung  |  2D-Menü  | 
| ------------- | ------------- | -------- | ---------------- |  --------- |
| avatarSrc     | Zeiger auf 3D-Modell | Andere können Ihren Avatar sehen   | Andere können Ihren Avatar sehen | Wird nicht verwendet |
| hairSrc       | Zeiger auf 3D-Modell |     | Andere können die Frisur Ihres Avatars sehen | Wird nicht verwendet | 
| accessorySrc  | Zeiger auf 3D-Modell |     | Andere können das Zubehör für Ihren Avatar sehen | Wird nicht verwendet |
| bodyAccessorySrc  | Peker til 3D-modell |  | Andere können das Modell sehen | Wird nicht verwendet |
| handRaised  | Boolsk Variabel(true/false)   | Lassen Sie andere Benutzer wissen, dass Sie eine Frage haben | Symbol über dem Avatar | Symbol neben dem Namen in der Namensliste | 
| muted  | Boolsk Variabel(true/false)  | Lassen Sie andere wissen, dass Ihr Mikrofon ein-/ausgeschaltet ist | Beginnt und stoppt die Animation der Münder der Avatare | Symbol neben dem Namen in der Benutzerliste | 
| displayName  | Text    | Teilen Sie anderen Benutzern Ihren Namen mit | Zeigen Sie den Namen Ihres Avatars an | Namen in der Benutzerliste und im Chatprotokoll | 
| companyName  | Text (Optional)    | Informieren Sie andere über den Namen Ihres Unternehmens / ihrer Organisation | Erscheint über Ihrem Avatar | Erscheint im Untermenü der Benutzerliste | 
| identityName  | Text    | Wird von einem Administrator festgelegt, um bestimmte Benutzer zu identifizieren (z. B. Titel ("Entwickler") oder Rolle ("Dozent")) | Text über dem Avatar anzeigen | Wird nicht verwendet |
| isOwner  | Boolsk Wert (true/false) | Wird intern für Administratoren verwendet | Wird nicht verwendet | Wird nicht verwendet |



### Avatare 
- Position 
- Rotation 
- Skalierung 
- Linke Hand Drehung und Sichtbarkeit (nur bei Verwendung von VR-Headsets mit Handsteuerung)
- Rechte Hand Drehung und Sichtbarkeit (nur bei Verwendung von VR-Headsets mit Handsteuerung)

## Kommunikation  

Damit Nutzer kommunizieren können, werden die folgenden Daten über WebRTC geteilt:
- Mikrofondaten (Erfordert die Erlaubnis durch den Browser, das Mikrofon zu verwenden. Daten werden nicht übertragen, wenn Sie das Mikrofon mit der „Stumm“-Funktion abschalten.)

- Webcam-Daten (Erfordert die Erlaubnis durch den Browser) 

- Bildschirmfreigabedaten (Erfordert die Erlaubnis über den Browser)

