# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Mobile](./public/assets/images/mobile-screenshot.jpeg)
![Desktop](./public/assets/images/desktop-screenshot.jpeg)

### Links

- Solution URL: [Solution on GitHub](https://github.com/horoserp/coming-soon)
- Live Site URL: [Live Site](https://horoserp.github.io/coming-soon)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Chakra UI](https://www.chakra-ui.com/)
- [Formik](https://formik.org/) - JS library
- [Yup](https://www.npmjs.com/package/yup)

### What I learned

This project gave me practice in forms and validation, as well as responsiveness with Charkra-UI.

```formik
<FormErrorMessage className="error" ml={45} mt={2} fontSize={14}>
  {formik.errors.email}
</FormErrorMessage>
```

### Continued development

I would like to practice more with Charkra-UI, Formik and Yup, expanding my skills in forms, async validation and components.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This is a great reference site which helped me remember some of the required syntax.
- [Stack Overflow](https://stackoverflow.com/) - This is an excellent resource for finding answers to precise questions.
- [Chakra UI Documentation](https://www.chakra-ui.com/docs)

## Author

- Website - [Robert P. Horosewski](https://horoserp.github.io/React-Portfolio)
- Frontend Mentor - [@horoserp](https://www.frontendmentor.io/profile/horoserp)
- LinkedIn - [Robert P. Horosewski](https://www.linkedin.com/in/robert-horosewski-8a0608196/)

## Acknowledgments

Thanks to my wife for the encouragement to pursue my dream.
