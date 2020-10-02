# Responsive Design Lab

For this exercise, you are going to use the starter code on the Responsive Design Lab Starter Code folder.

## Opening your site on "mobile"
1. Open the `index.html` in your browser.
2. Open the Chrome inspector.
3. In the top left corner of the inspector you will find an icon that says **Toggle device toolbar** when you hover over it.
4. Click it to enable a **Responsive** view of the site.
    - You can always click this button again to go back to the desktop view.
5. To the right of the webpage you should now have a handle that you can use to adjust the size of the screen.
    - This allows you to easily simulate screens of any size.
6. See what the site looks like with a width of roughly...
    - 1200px
    - 768px
    - 480px
7. Do you notice any **responsive** behaviour?
    - What do you think is causing this behaviour?
8. Would you be happy with the current "mobile" experience?

## Media Queries
1. Create a media query that is activated when the screen width is less than 768px.
2. This media query should...
    - Change the arrangement of the elements in the `main` block such that they are stacked on top of each other.
      - Hint: Review the flexbox lecture.
    - Remove the header items from the left and right of the header.
      - Leave only the logo.
    - Center the **Logo** within the header.
      - Hint: Review the flexbox lecture.
    - shorten the height of the `hero` to be 40% of the **width** of the screen.
      - Hint: Review the CSS units lecture.

## Extra exercise
1. Try to create the styles using mobile first and adding media queries that are activated when the screen width is higher than 768px.