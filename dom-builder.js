const DIV = 'div';
const PARAGRAPH = 'p';
const BUTTON = 'button';


function domBuilder() {
    const createdElements = new Map();

    // Specific elements creation
    function createDiv(content = null, options = null) {
        return createElement(DIV, content, options);
    }

    function createParagraph(content = null, options = null) {
        return createElement(PARAGRAPH, content, options);
    }

    // Generic
    function addElement(element, options = null) {
        const insideElement = document.querySelector(options && options.inside) || document.body;
        insideElement.append(element);
    }

    function createElement(type = DIV, content = null, options = null) {
        const newElem = document.createElement(type);

        // Attributes
        const currentTypeCount = createdElements.get(type);
        const generatedId = `${type}${currentTypeCount + 1 || 1}`;
        newElem.setAttribute('id', `${options && options.id || generatedId}`);

        // Content
        if (content) {
            newElem.appendChild(createContent(content));
        }

        // Count created elements
        countCreatedElements(type);

        return newElem;
    }

    function createContent(content) {
        if (typeof content === 'string') {
            return document.createTextNode(content);
        }

        return content;
    }

    function countCreatedElements(type) {
        const currentTypeCount = createdElements.get(type);
        createdElements.set(type, currentTypeCount + 1 || 1);
    }

    return {
        addElement,
        createDiv,
        createParagraph,
    };
}


// TEST USAGE
const db = domBuilder();

const myP = db.createParagraph('Hi there! I\'m a Paragraph inside a DIV');
const myDiv = db.createDiv(myP, {
    id: 'myFirstDiv'
});


db.addElement(myDiv);

const myDiv2 = db.createDiv('My Second DIV');
db.addElement(myDiv2, {
    inside: '#myFirstDiv'
});
