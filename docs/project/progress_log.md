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

---

## [Date] - [Session]

### [Task Category]

- [Your tasks here]
