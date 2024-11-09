# goose
samh task
# Project Overview

This project is designed to be scalable and maintainable, supporting multilingual content, reusable components, and SEO-friendly architecture.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Implementation Details](#implementation-details)
   - [Header](#header)
   - [Form](#form)
   - [Cards](#cards)
   - [Footer](#footer)

---

## Project Structure

The project structure was built to support future growth and development:

1. **Dynamic Layout**: A main layout was created for the website, with options to add additional layouts for specific pages, such as a dashboard.
2. **Multilingual Support**: The site supports both Arabic and English languages. All sections are fully translated for a seamless user experience.
3. **Reusable Components**: Components were designed for easy reuse, allowing developers to quickly implement them in different parts of the site, reducing code repetition.
4. **Future-Ready Pages**: Several placeholder pages were added to streamline future development.
5. **SEO Optimization**: Essential SEO tags were included in the main `App` component, with flexibility to add page-specific tags as needed.

---

## Implementation Details

### Header

The header section includes essential navigation and language selection features:
1. **Language Selector**: A dropdown button with flags (Arabic and American) allows users to switch between languages.
2. **Navigation Links**: Includes links to various pages: Login, Promotions, Booking, and Home.
3. **Responsive Sidebar**: On mobile or tablet, a button toggles a sidebar for the navigation links, optimizing the user experience on smaller screens.

### Form

The form section captures user inputs with enhanced validation and accessibility:
1. **Title Header**: The page header is styled with a custom font.
2. **Form Fields**:
   - **Trip Type Selector**: Radio buttons for selecting the type of trip.
   - **Destination Inputs**: Text fields for entering "From" and "To" locations.
   - **Duration Inputs**: Two inputs to set the duration of the trip.
   - **Dropdown Selector**: Options for selecting the number of travelers and travel class.
3. **Validation**: Implemented using `vuelidate` for reliable form validation.
4. **Date Constraints**: Date inputs are restricted to ensure valid date selection.
5. **Search Button**: Clicking this button shows any validation errors or, if valid, displays the selected data in a pop-up.
6. **Reusable Input Components**: Each input type is coded separately for easy reuse and to reduce code duplication.

### Cards

Dynamic cards were added to showcase various trip options:
1. **Card Details**: Four cards display a trip’s image, location, name, duration, and price.
2. **Hover and Active Effects**: Each card has a hover effect and an active effect upon selection, with a class that highlights the selected card.
3. **Arabic Number Formatting**: A function was created to display numbers in Arabic when the language is set to Arabic, with a similar function planned for date formatting.

### Footer

The footer section provides additional navigation and links, with a responsive design:
1. **Responsive Layout**: Divided into four columns, with adjustments to two columns on tablets and one column on mobile for optimal viewing.
2. **Hover Effects**: Links and platform icons (Android and iOS) have subtle hover effects for an enhanced user experience.

---

## Additional Information

This project is structured for both readability and extensibility, using well-organized components and validation libraries like `vuelidate` to ensure consistency. Future development will include additional features and enhancements as outlined in the project roadmap.


