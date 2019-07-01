'use strict';

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

    function createButton(content = null, options = null) {
        return createElement(BUTTON, content, options);
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

        // Events
        const events = options && options.events;
        if (events) {
            for (const event in events) {
                if (events.hasOwnProperty(event)) {
                    newElem[event] = events[event];
                }
            }
        }

        // Style
        const style = options && options.style;
        if (style) {
            newElem.setAttribute('style', style);
        }

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
        createButton,
    };
}
