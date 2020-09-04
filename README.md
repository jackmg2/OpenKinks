# OpenKinks
The OpenKinks project is an initiative to open discussion into couples all around the world.

A lot of websites, like mojoupgrade, are offering a couple of questions that both partners will answer about what they like, dislike or would like. At the end of the quizz, it will display what they both like or are open to.

However, most of these websites are for an english audience.
**The goal of OpenKinks is to build an exhaustive database of questions in different languages.**

A basic website is also here, fully open source, for people who want to be sure their data won't be tracked.


## How to contribute
### Your language doesn't exist?
Copy the directory "en" and rename it with your [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) in ISO 639-1.
Translate files i18n.js and questions.js as explained in chapter **File Structure**.

### Your language exist but some questions are missing
Check the version number of *en/questions.js*. 
If it's superior to the one in the questions.js file you want to update, copy missing questions from *en/questions.js* and add them to your *questions.js*, translate missing questions and update the version number to match with *en/questions.js*.

### You want to add some new questions?
You must add these questions in english before adding them into your language!
Just open *en/questions.js*, copy the structure of the last question and append them at the end of the file.
Increment the version number at the top of the file of 0.1.

### File Structure
#### i18n.js

#### questions.js

## Inspiration
https://mojoupgrade.com/
https://www.weshouldtryit.com/
https://carnalcalibration.com/