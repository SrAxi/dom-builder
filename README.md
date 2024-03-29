# dom-builder
Simple DOM renderer with Vanilla JS

### **!!IMPORTANT!!** This project has been abandoned in this repo and is being continued here: https://github.com/SrAxi/better-dom-builder

### API
- `addElement()`: Adds the element to the DOM
- `createDiv()`: Creates a `div` DOM element
- `createParagraph()`: Creates a `p` DOM element
- `createButton()`: Creates a `button` DOM element
- `createLink()`: Creates a `a` DOM element

### Options
- `id`: The `id` of the created element
- `inside`: The query parameter where the element will be inserted, default is `body`
- `events`: The events to be added to the created element
- `style`: The style to be added to the created element
- `href`: The `href` to be added to the created `a` element


------

### Example of usage:
```html
<script type="application/javascript">
    const db = domBuilder();

    // First div creation
    const myP = db.createParagraph('Hi there! I\'m a Paragraph inside a DIV');
    const myDiv = db.createDiv(myP, {
        id: 'myFirstDiv',
        events: {
            ondblclick: () => alert('I double clicked this'),
        }
    });
    db.addElement(myDiv);

    // Second div creation
    const myDiv2 = db.createDiv('My Second DIV');
    db.addElement(myDiv2, {
        inside: '#myFirstDiv'
    });

    // Button div creation
    const myButton = db.createButton('Click me!', {
        events: {
            onclick: () => alert('I clicked this'),
        },
        style: 'color: red; background: black;'
    });
    db.addElement(myButton);

    // Link div creation
    const myLink = db.createLink('I\'m a link!!', {
        href:'#myFirstDiv',
        style: 'color: #0366d6; text-decoration: none;'
    });
    db.addElement(myLink);
</script>
```
