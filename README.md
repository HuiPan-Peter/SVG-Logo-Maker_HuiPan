# SVG-Logo-Maker_HuiPan
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#userStory)
  
2. [Installation](#installation)
  
3. [Usage](#usage)
  
4. [Contributions](#contributions)
  
5. [Tests](#tests)
  
1. [Questions](#questions)
  

## Description

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

```
Acceptance Criteria: 
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

What problem does this application try to solve?: Help user quickly and easily create a Logo SVG file by using a command-line application.
```

## Installation
```
1.Download GitHub repository;
2.Open folder with VSCode to check "dependencies": {"inquirer": "^8.2.4"}; {"jest": "^24.9.0"};
3.Under node command-line run “npm i” to install inquirer@8.2.4 and jest@24.9.0;
```
[Github Repository]https://github.com/HuiPan-Peter/SVG-Logo-Maker_HuiPan.git

## Usage
```
1.Under bash command ``` node index.js ``` to invoke the application;
2.Follow Inquirer prompt, specify "character","text","shape" and "color";
3.When you see console message "logo.svg file Generated!", go to the directory "example" to check the svg file created.
4.Under bash command ``` npm run test ``` to invoke the Jest Test. 
```
[Github Usage & Walkthrough Video demo]https://github.com/HuiPan-Peter/SVG-Logo-Maker_HuiPan/tree/main/Screenshots%20%26%20Video

## Tests
```
Test-Driven Development
Under bash command ``` npm run test ``` to invoke the Jest Test. 
```
## Contributions

https://github.com/HuiPan-Peter

## License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

```
     https://opensource.org/licenses/MIT

    Licensed under the MIT License

    Copyright u00A9 [2023] [Hui Pan]
    Permission is hereby granted, free of charge, to any person obtaining 
a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
```

## Questions

If you have any questions about this application, Contact Me:

```
Github: https://github.com/HuiPan-Peter

Email:  guaranstone@gmail.com
```
