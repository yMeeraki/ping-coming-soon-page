# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Links

- Solution URL: [Github](https://github.com/yMeeraki/ping-coming-soon-page)
- Live Site URL: [Netlify](https://pingcomingsoonfem.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout
- Mobile-first workflow
- Vanilla JavaScript for form validation

### What I learned

One key area of learning was form validation using JavaScript. Implementing error handling for invalid email addresses helped me understand how to manipulate the DOM and provide user feedback effectively.

Here is an example of how I implemented email validation:

```js
    if(email.value===""){
        alert("Whoops! It looks like you forgot to add your email")
    }
    else{

        if (isValid === false){
            errorMessage.style.display = 'block';
            email.style.border = '1px solid hsl(354, 100%, 66%)'
        }
        else{
            errorMessage.style.display = 'none'; 
            email.style.border = '1px solid hsl(223, 100%, 88%)'
            alert("Thank you! You will be notified.");
        }
    }
```

### Continued Development

In future projects, I plan to focus on improving and refining the following areas:

1. **JavaScript Form Validation:**
   - Enhance email validation to include more complex patterns and custom error messages.
   - Experiment with additional form validation techniques, such as live validation and real-time feedback.

2. **Responsive Design:**
   - Continue perfecting responsive layouts by exploring CSS Grid and media queries for complex designs.
   - Improve my understanding of mobile-first design principles to ensure better user experience across all devices.

3. **CSS Custom Properties:**
   - Incorporate more CSS custom properties (variables) to manage styles effectively and make the codebase easier to maintain.
   - Focus on reducing redundancy in CSS and optimizing the use of custom properties for theming and reusable components.

4. **Code Structure and Optimization:**
   - Refine the structure of my JavaScript code by breaking down functionality into smaller, reusable functions.
   - Optimize CSS to reduce file size and improve loading performance by minimizing unused styles and experimenting with tools like PostCSS.

By focusing on these areas, I aim to enhance my skills and ensure my projects follow best practices for both frontend design and user experience.


### Useful resources

- [JavaScript.info - Form Validation](https://javascript.info/form-validation) - This guide was essential in teaching me how to properly handle form validation in JavaScript. It covers both basic and advanced concepts, making it a great reference.


## Author

- Frontend Mentor - [@yMeeraki](https://www.frontendmentor.io/profile/yMeeraki)

