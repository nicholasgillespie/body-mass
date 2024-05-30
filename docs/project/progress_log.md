# Progress Log

## 2024-05-22 - Morning

### Project Setup

- Set up the project files.
- Initialized the project on [GitHub](https://github.com/nicholasgillespie/body-mass).
- Deployed the project to [GitHub Pages](https://nicholasgillespie.github.io/body-mass/).

### Design Review

- Reviewed the [Figma file](https://www.figma.com/design/2YW3dpK8roTgHVAZGZeODF/bmi-calculator?node-id=2-439) to:
  - Defined the project [design tokens](https://github.com/nicholasgillespie/body-mass/tree/main/src/styles/00-settings).
  - Identified the sections, main elements/components, and the [macro layout](../design/01-composition.png).
  - Further identified the components and determined the [micro layout](../design/02-components.png) for those elements.

## 2024-05-22 - Afternoon

### HTML Structure & Accessibility

- Initiated HTML structure setup with a focus on accessibility.
- Began development of the header, which includes navigation and an intro section to house the Body Mass Index calculator component.
- Noted minimal progress.

## 2024-05-23 - Morning

### Tech Watch

- Conducted tech watch, resulting in creation of overlay and overflow CSS utility classes.

### Header Development

- Continued development of the header element with a focus on accessibility.
  - Set the background for the header section.
  - Started working on the calculator component.

## 2024-05-23 - Afternoon

### Header Development

- Continued development of the calculator component with a focus on accessibility.
  - Worked on the layout of the form elements.
  - Styled the checkboxes and partially styled the inputs.

#### TODO

- Update and refine CSS variables in the root, such as `--border`.
- Improve focus styles in the global styles for better accessibility.

## 2024-05-24 - Morning

### Header Development

- Completed the pending TODO tasks.
- Progressed with the calculator component, focusing on accessibility.
  - Improved the box class by ensuring border radius ratios are maintained when nested and by making it compatible with high contrast modes.
  - Ensured checkbox visibility in high contrast mode.

#### TODO

- Deal with including the measure units in the height and weight input elements.

## 2024-05-24 - Afternoon

### Header Development

- Completed the pending TODO tasks.
- Continued building the header. The spacing of the header has been sorted for desktop view down to 800px. The transition to mobile view should be relatively straightforward.

#### TODO

- Prepare the switch for the imperial measurement system, which will require additional input boxes. Plan to use a JavaScript-based toggle system to switch between measurement systems.
- In production, the input elements are not getting styled as expected. Need to investigate and resolve this issue.

## 2024-05-25 - Morning

### Header Development

- Started working on the pending TODO tasks from the previous day.
- Added the additional input boxes for the imperial measurement system.
- Currently implementing the JavaScript-based toggle system to switch between the metric and imperial measurement systems.

#### TODO

- Complete the implementation of the JavaScript-based toggle system for the measurement systems.
- Test the toggle system to ensure it works as expected.
- Continue with the development of the calculator BMI results.

## 2024-05-26 - Morning

### Toggle System and Layout Completion

- The JavaScript-based toggle system for switching between the metric and imperial measurement systems has been successfully implemented.
- The layout for the calculator is functioning as expected, and the transition between different measurement systems is smooth and seamless.

#### TODO

- The next step is to modify the `calculateBMI` function to display the calculated BMI results in the browser's user interface, rather than logging them to the console.

## 2024-05-28 - Afternoon

### Completion of `calculateBMI` Function

- The `calculateBMI` function has been successfully enhanced to calculate BMI using either metric or imperial systems, validate inputs, and display the results, including BMI value, classification, and healthy weight range, on the user interface.
- The user interface updates smoothly and provides an output to the user.

#### TODO

- Deal with the hero background and continue with the integration of the graphic design.

## 2024-05-30 Morning

### Hero Background and Key Sections Completed

- The background has been successfully completed.
- The "bmi-explained" section has been completed.
- The "aims" section has been completed.

#### TODO

- Move on to the "limitations" section.

## 2024-05-30 Afternoon

### Completion of Limitations Section

- The "limitations" section has been successfully completed.

#### TODO

- No pending tasks.

---

## [Date] - [Session]

### [Task Category]

- [Your tasks here]
