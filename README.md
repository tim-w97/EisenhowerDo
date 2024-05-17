# EisenhowerDo

Eine React Native-App zur Verwaltung von Todos, basierend auf dem Eisenhower-Prinzip.

<br/>

### Installationsanleitung für Android

Info: Das Projekt habe ich mit Node v22.0.0 entwickelt.

<br/>

Damit die App Anfragen an das Backend stellen kann, muss eine ```.env``` Datei mit der URL zum Backend erstellt werden.

Im Projekt liegt bereits eine ```.env.example``` Datei, diese können Sie einfach kopieren und umbenennen:

```shell
$ cp .env.example .env
```

Falls Sie den Port des Backends ändern, müssen Sie diesen auch in der ```.env``` Datei ändern.

<br/>

Danach müssen die Abhängigkeiten installiert werden:

```shell
$ npm i
```

<br/>

Anschließend muss der Android-Emulator gestartet und folgender Befehl ausgeführt werden:

```shell
$ npm start
```

Sobald der Metro Bunder bereit ist, die ``a`` Taste drücken, um die App auf dem Android-Emulator zu installieren.
