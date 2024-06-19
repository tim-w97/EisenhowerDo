# EisenhowerDo

Eine React Native-App zur Verwaltung von Todos, basierend auf dem Eisenhower-Prinzip.

<br/>

### Installationsanleitung für Android

Info: 

Dieses Projekt habe ich mit Node v22.0.0 entwickelt. Ob das Projekt mit einer anderen Node-Version funktioniert, kann ich nicht garantieren.


Zuerst müssen Sie die Abhängigkeiten installieren:

```shell
$ npm i
```

<br/>

Für die nächsten Schritte muss ein Android-Emulator aktiv sein.
Sie können mit Android Studio einen Emulator starten oder alternativ mit folgendem Befehl über die Konsole:

```shell
$ ~/Library/Android/sdk/emulator/emulator -avd Pixel_7_API_34
```
Der Pfad zum Android SDK sowie der Gerätename könnten bei Ihnen abweichen.

<br/>

Anschließend muss folgender Befehl ausgeführt werden, um den Metro Bundler zu starten:

```shell
$ npm start
```

Sobald der Metro Bunder bereit ist, die ``a`` Taste drücken, um die App auf dem Android-Emulator zu installieren.
