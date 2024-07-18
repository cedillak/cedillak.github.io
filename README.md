# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Ana Cedillo

**Email**: cedillak@ucmail.uc.edu

**Short-bio**: My key interests are in web and app development. 

![headshot](images/profile.jpg)
*Ana Cedillo*

## Repository Information

Respository's URL: [https://github.com/cedillak/waph-cedillak.git](https://github.com/cedillak/waph-cedillak.git)

This is a private repository for Ana Cedillo to store all code from the course. 

## Overview
This project involved creating and deploying a professional profile website using GitHub Pages. The website showcases my resume and integrates various functionalities using HTML, CSS, and JavaScript, along with public APIs. The website is accessible at [https://cedillak.github.io](https://cedillak.github.io), and the project folder is available on GitHub at [https://github.com/cedillak/cedillak.github.io](https://github.com/cedillak/cedillak.github.io).

Through this project, I gained valuable experience in creating and deploying a professional website using GitHub Pages. I learned how to use a Bootstrap template to quickly design a polished look, and I enhanced my JavaScript skills by adding interactive features like digital and analog clocks, a show/hide email button, and a confetti animation. I also integrated public APIs to include dynamic content, such as a random programming joke and a dog image. Additionally, I implemented JavaScript cookies to personalize the user experience by remembering visitors and displaying welcome messages. Overall, this project improved my web development skills and taught me how to make a website both functional and engaging.

## General requirements:
### Creating and Deploying a Personal Website:
I created a repository on GitHub named `cedillak.github.io to` host my personal website. Using a free Bootstrap portfolio template, I replaced the placeholder content with my personal information, including my name, headshot, contact details, education background, work experience, and skills. This customized template ensured a professional and cohesive presentation tailored to potential employers. The template allowed for a clean and professional look that I believe appeals to potential employers in the computer science field.

### Adding a Link to the WAPH Course:
I added a new HTML page, waph.html, which provides an overview of the "Web Application Programming and Hacking" course. I linked this page from the main website using the following code:
`<a href="waph.html" target="_blank">Click Here to Access the Course Information</a>`

## Non-technical requirements
### Use an open-source CSS template:
To target potential employers, I selected a Bootstrap theme that matched my professional aspirations as a computer science student. I Googled "free bootstrap themes" and chose one that provided a modern and professional look. This theme was customized with my personal details to create a cohesive and attractive profile.

### Include a page tracker:
I implemented a page tracker using Flag Counter to keep track of visitors to my website. The tracker was added to the index file with the following code:
`<h3 class="mb-0">Page Tracker</h3>
<a href="https://info.flagcounter.com/0sYk"><img src="https://s01.flagcounter.com/count2/0sYk/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_4/viewers_0/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0"></a>`
This snippet includes a header and an image link from Flag Counter, which displays visitor statistics on the website.

## Technical requirements
### JavaScript code:
1. **Digital Clock:** I implemented a digital clock using JavaScript that displays the current time and updates every second. This involved creating a function to get the current time, format it as a string, and update the HTML element's content with this string every second using `setInterval`.
2. **Analog Clock:** For the analog clock, I used JavaScript to create a clock face with moving hands. This involved calculating the rotation angles for the hour, minute, and second hands based on the current time and updating the CSS transform property of these elements every second.
3. **Show/Hide Email:** I added a JavaScript function to toggle the visibility of my email address. This function changes the display property of the HTML element containing the email between 'none' and 'block' when a button is clicked.
4. **Confetti Animation:** To add a playful element, I incorporated the JS Confetti library. I created a button and attached an event listener to it. When the button is clicked, the library's `addConfetti` method is called, which triggers a confetti animation on the page.

### Integrate the jokeAP:
I integrated the JokeAPI to fetch a new programming joke every minute. I used jQuery to make an AJAX GET request to the API endpoint and update the HTML content with the joke. This process is repeated every 60 seconds using `setInterval`.

### Integrate public API with graphics:
1. **Random Dog Image API:** I used the Dog CEO's Dog API to fetch and display a random dog image. I created a function that makes a fetch request to the API, processes the JSON response, and updates the `src` attribute of an HTML `img` element with the image URL.
2. **Pokémon Image API:** As a bonus, I implemented functionality to fetch and display a Pokémon image based on user input. I used the PokeAPI to get data for a Pokémon specified by the user. The fetch request is made when the user submits the Pokémon name, and the image URL from the response is used to update the `src` attribute of an HTML `img` element.

### Use JavaScript cookies to remember the client:
1. **Set Cookie:** I created a function to set a cookie with a specified name, value, and expiration date. This function constructs a cookie string and assigns it to document.cookie.
2. **Get Cookie:** Another function retrieves the value of a cookie by its name. It parses document.cookie, splits it into individual cookies, and returns the value of the specified cookie.
3. **Check Visit:** The main function checks for a cookie indicating the last visit. If the cookie is not found, it displays a welcome message and sets the cookie with the current date and time. If the cookie is found, it displays a message with the last visit date and time, then updates the cookie with the current date and time. This function runs when the page loads, ensuring the welcome message is displayed appropriately based on the user's visit history.
