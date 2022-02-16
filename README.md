# OpenKinks
The OpenKinks project is an initiative to open discussion into couples all around the world.

A lot of websites, like mojoupgrade, are offering a couple of questions that both partners will answer about what they like, dislike or would like. At the end of the quizz, it will display what they both like or are open to.

However, most of these websites are for an english audience.

**The goal of OpenKinks is to build an exhaustive database of questions in different languages.**

A basic website is also here, fully open source, for people who want to be sure their data won't be tracked.

## How to contribute
The project is open source. Feel free to create new pull request if you see any bugs, want to improve UI, optimize javascript, ... whatever.
If you want to provide new translations, see below.

### Your language doesn't exist?
Copy the directory "en" and rename it with your [language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) in ISO 639-1.

Translate files i18n.js and questions.js as explained in chapter **File Structure**.

### Your language exist but some questions are missing
Check the version number of *en/questions.js*. 

If it's superior to the one in the questions.js file you want to update, copy missing questions from *en/questions.js* and add them to your *questions.js*, translate missing questions and update the version number to match with *en/questions.js*.

### Your language exist but you want to fix a sentence (typo, grammar)
Just fix it, do not update the version number.

### You want to add some new questions?
You must add these questions in english before adding them into your language!

Just open *en/questions.js*, copy the structure of the last question and append them at the end of the file.
Increment the version number at the top of the file of 0.1.

### File Structure
#### i18n.js
This file translates the UI.

It's a basic "key: 'value'". Just translate the value part.

The key is used to do the mapping with the UI, you can find them in the main.js file.

Special note for levels, they are used to pick specific questions. Translate the value of "Description" field.

#### questions.js
Example:
```
{
      "question": "Have partner talk dirtier to me",
      "reversedForm": "Talk dirtier to partner",
      "sourcePartnerGender": 'a',
      "destinationPartnerGender": 'a',
      "tags": [],
      "level": 1
    }
```
* **question**: The main question. Asked to Partner A
* **reversedForm**: [Facultative] If specified, it's the question asked to Partner B. If not specified, value of question is going to be used.
* **sourcePartnerGender**: Biological gender of Partner A. Some questions can be gender specific. Values can be 'a' for All, 'm' for Male, 'f' for Female.
* **destinationPartnerGender**: Biological gender of Partner B. Some questions can be gender specific. Values can be 'a' for All, 'm' for Male, 'f' for Female.
* **tags**: An array of tags to later had some filtering.
* **level**: The level of the question as defined in i18n.js. 

## Can I use it in my project?
Yes, the goal is to build a universal pool of questions. Feel free to use them to provide your own experience.

## Inspiration
https://mojoupgrade.com/

https://www.weshouldtryit.com/

https://carnalcalibration.com/