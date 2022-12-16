# Fraction Decimal Converter

Fraction Decimal Converter is a program that prints out the decimal representation for fractions given by the user. My goal is to facilitate exploring how fractions and their decimal equivilants are related, both for myself and others.

## Getting started

To run the program run `npm start` followed by the fraction you want to convert. For instance if the user types in `npm start 1/8`, `0.125` will be printed to the console.

If the user types in a fraction with a repeated decimal, the repeated digits will be preceeded by `|`. For instance, if the user types `npm start 1/7`, the `0.|142857` will be printed out, or if the user types `npm start 1/90`, `0.0|1` will be printed out.

## Commands

Run `npm start (fraction)` to run the program.
To test, run `npm test`

## Dependencies

So far there are only dev dependencies. I am using typescript for the files and compiling and running using ts-node. For testing, I am using jest.

## Developments

At this point, I should probably find a better way to indicate repeating decimals than using the | symbol, which probably looks too much like a one. I want to impliment some way of highlighting different starting points within the decimal output. For example if the fraction was 1/7, which has the decimal expansion 0.142857.. I want to be able to highlight the 2, since it is the starting point for the decimal expansion for 2/7.

Eventually, I am hoping to convert this project into a web app, probably using React, making it more accessible and more customizable.
