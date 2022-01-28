---
id: security
title: Security & Data
---

## Overview {#overview}
Estraad is a 3D social collaboration platform where users meet inside a virtual room and can collaborate and communicate with each other.  

Data is used for managing access (accounts and authentication), synchronizing real-time experiences, communication, as well as sharing content to allow for collaboration. 

## Stored Data {#stored-data}

Estraad stores minimal amount of data in our servers. All database data and backups are encrypted at rest. All our infrastructure runs on AWS services located in region “eu-west-1” Europe - Ireland. 

All the rooms on Estraad runs on the shared environment available at meet.estraad.com, and all rooms are connected to the same backend services. If our clients requires it, we also have the option to run instances of the entire Estraad 3D application on a separate isolated infrastructure with different pricing model. 

### Accounts {#accounts}

Accounts are used to sign a user in. We do not store any passwords but send a login link by email instead. The only account information in our databases are hashed email addresses and account creation date.  

Because the email addresses are hashed, administrators cannot see the email addresses, but they can be searched if you know the address. 

### Rooms {#rooms}

Users may share content with others inside a room. The following content may be uploaded to a room if the room permissions allow it: 

- Images 

- Video 

- Audio 

- 3D Objects 


Files that are uploaded to a room are encrypted and the encryption key is shared with everyone in the room. This means the file cannot be viewed by others outside the room unless they have the encryption key.   

The user may “Lock” the content inside the room. When an object is locked, the encryption key is stored in the database with the file, and is shared with users entering the room allowing them to view the file. When a user leaves the room, any non-locked items will be considered “Abandoned”, will prevent access to it and is deleted within 72 hours. 

All data is encrypted in transit via TLS. 

## Data transmission inside Rooms {#data-transmission-inside-rooms}

To achieve a live shared immersive experience in 3D space, the following components need to be synchronized across all users inside a room. 


| Field         | Type          | Context  |  3D Environment  |  2D Menus  | 
| ------------- | ------------- | -------- | ---------------- |  --------- |
| avatarSrc     | 3D Model Reference | Others need to know what you look like   | Show model | Not used |
| hairSrc       | 3D Model Reference      |     | Show model | Not used | 
| accessorySrc  | 3D Model Reference     |     | Show model | Not used |
| bodyAccessorySrc  | 3D Model Reference    |  | Show model | Not used |
| handRaised  | Boolean(true/false)   | Let others know you have a question    | Icon above avatar | Icon beside name in userlist | 
| muted  | Boolean(true/false)      | Let others know your microphone is muted/unmuted  | Stop avatar mouth animation | Icon beside name in userlist | 
| displayName  | Text    | Let others know your name | Display name above avatar | Name in userlist, name in chatlog | 
| companyName  | Text(Optional)    | Let others know your company | Display company above avatar | Not used| 
| identityName  | Text    | Set by an administrator for identifying special users | Display special tag above avatar | Not used |
| isOwner  | Boolean (true/false) | Not currently in use  | Not used | Not used |




### Avatars {#avatars}
- Position 
- Rotation 
- Scale 
- Left Hand Rotation and visibility (Only while using a VR headset) 
- Right Hand Rotation and visibility (Only while using a VR headset) 

### Player Info {#player-info}

In order to identify other users, we also synchronize the following information 


## Communication {#communication}

For users to communicate, the following data is shared between users using WebRTC: 

- Microphone audio (Requires browser permissions to use your own microphone. Is not transmitted when you mute your microphone.) 

- Webcam Data (Need to click and approve sharing video button) 

- Screenshare data (Need to click and approve sharing screen button) 

