---
name: Modality
menu: UX patterns
---

# Modality

![Example from Den Haag showing a full-screen modal view](https://user-images.githubusercontent.com/248921/153422877-af38de2e-cc66-422f-9dc1-d2f3fb27bd2c.png)

Example from Den Haag showing a full-screen modal view

## Description

In order to let users accomplish on a task at hand it is sometimes needed to provide extra focus. Especially when there is limited screen estate, such as on mobile devices. One way to add focus is by displaying the relevant task in a modal view.

There are two types of modal views:

- A modal dialog; this is a window displayed on top of the current screen where a user is still able to see (parts of) the underlying context.
- A full-screen modal view; in this view the task is displayed full-screen on top of the originating page.

## General guidelines

- Keep task in modal views simple and to the point.
- Make it clear to the user what task is being performed in the modal view.
- Allow users to always close a modal screen with a close action. The best position for the close action is at the top-right corner of the screen.
- In case of a multi-step task, the subsequent steps are stay in the current screen and won’t open an additional modal view. A user must be able to go back to previous steps in their task.
- in case of a full-sceen modal view, it is recommended to diable the `ESC` key action used in modal dialogs; accidentally hitting the `ESC` key will result in a user being taken out of their current task and likely be confusing. 

## References
- [Modality Is the One UX Concept That Most Designers Don’t Fully Understand](https://uxplanet.org/modality-the-one-ux-concept-you-need-to-understand-when-designing-intuitive-user-interfaces-e5e941c7acb1)
- [Material Design - Dialogs](https://material.io/components/dialogs#usage)
- [Apple Human Interface guidelines - Modality](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/modality/0
