# Zoo

## Zoo Animal Tracker App, 08/18/2017

## By Jacob Ruleaux

## Description
This app will allow user to enter new animals added to the zoo inventory, including basic info about the animal. The inventory is displayed. Animals maybe sorted by age. The animals maybe edited.

## Planning

1. Set-up new Angular project file "zoo".

2. Specs

    Spec 1:
    * Input: User may enter "new animal" with details of species, name, age, diet, location, sex, likes/dislikes, number of caretakers.
    * Output: The animal data   entered will be displayed.

    Spec 2:
    * User will be able to sort Animal Inventory by age viewing only animals in the age range selected.

    Spec 3:
    * User will be able to click on individual animal and edit the details of the animal. Edited details will be displayed.

3. Integration

  * component.ts and base html file.
  * new-animal-component folder for adding new inventory.
  * edit-animal-component to edit inventory.
  * animal-pipe component to sort animals by age.

4. UX/UI

  * Logical and easy to understand page lay-out. Usage should be easy to understand.

5. Polish/Wishlist

  * Clean-up indents and unnecessary code.
  * Add styling and images. Possibly slideshow.
  * Add admittance property for each animal.
  * Add display for total caretakers needed.
  * Add links to contact, about, faqs components.

## Installation
  * In terminal "git clone https://github.com/jakeruleaux/zoo".
  * In terminal "cd zoo".
  * In terminal "npm install".
  * In terminal "bower install".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Technologies Used

* Angular 2
* Bootstrap
* Typescript
* Javascript
* HTML
* CSS

## Known Bugs

* App does not 'save' user input if the browser is refreshed as there is no database connected to it.
 
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contact

Contact the author at jakeruleaux@hotmail.com.

## License

MIT

### Copyright 2017 Jacob Ruleaux
