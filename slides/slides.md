!SLIDE 
# Präsentieren mit<br>ShowOff
![Präsentieren mit ShowOff](showoff.gif)
<script>timed(20000);</script>

!SLIDE center
# So viele gute Tools
![So viel Auswahl](choose_one.jpg)

!SLIDE center
# Innere Schönheit?
![Innere Schönheit](binary.png)

!SLIDE bullets
# Warum ShowOff?
* Plaintext IMMER besser
* Versionierbar
* Austauschbar
* Wartbar
* Open Source

!SLIDE center
# Es kann sogar Bullet-points
    !SLIDE center bullets incremental
![Es kann sogar Bullet-points](bullets.gif)

!SLIDE bullets
# Und noch mehr...
* Sektionen
* PDF Export
* ImageMagick Support
* GitHub Pages
* Heroku
* Transitions & Animationen

!SLIDE bullets
# Nachteile
* Dokumentationslücken

!SLIDE center
# Nicht BWLer-kompatibel
![Nicht BWLer-kompatibel](bwl.gif)

!SLIDE center
# Aber super für Entwickler
![Aber super für Entwickler](dev_1.gif)

!SLIDE
# Wie funktioniert's?
    $ gem install showoff
    $ showoff create foo
    $ showoff serve
    
!SLIDE center
# Sinatra!
![Sinatra!](sinatra.jpg)

!SLIDE center
# Wie sieht's aus?
![Wie sieht's aus](contents.png)

!SLIDE
# Syntax
    !SLIDE bullets
    # Warum ShowOff?
    * Plaintext IMMER besser
    * Versionierbar
    * Austauschbar
    * Wartbar
    * Open Source
    
!SLIDE
# Konfiguration
    { 
      "name": "Präsentieren mit ShowOff", 
      "sections": [ {"section":"slides"} ]
    }

!SLIDE transition=scrollLeft center
# Transitions
    @@@ markdown
    !SLIDE transition=scrollLeft center
<br>
![Animation](animation.gif)

!SLIDE transition=scrollLeft
# Styling
    @@@ css
    .content::before {
        position: absolute;
        left: 0px;
        top: 50px;
        content: url(innoq_logo.png);
    }

!SLIDE
# Scripting
## Pecha Kucha Timer
    @@@ javascript
    function timed(ms) {
        setTimeout(function() {
            nextStep();
            timed(ms);
        }, ms);
    }

    !SLIDE
    <script>timed(20000);</script>

!SLIDE execute
# Scripting
    @@@ javaScript
    result = "foo " + "bar";

!SLIDE bullets
# Infos
* http://github.com/schacon/showoff

!SLIDE center
# Langweilig? Danke :)
![Langweilig?](lebowsky.gif)
Bilder von http://iwdrm.tumblr.com
