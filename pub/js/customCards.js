"use strict";

(function(global, document, $) { 

    const log = console.log

    function CustomCards() {
        this.cards = [] // can have an array of cards
        this.lastEnter // prevent dragLeave events from firing when entering child element

    }

    CustomCards.prototype = {

        // adds a new card under the div with parentId, if a templateCard is provided it will just create a card with the same style as the templateCard
        addCard: function(parentId, titleName, templateCard) {
            if (typeof parentId !== "string") {
                console.log('addCard takes the id of its parent as a String')
            } else if (!templateCard) {
                const card = document.createElement('div')

                // set the attributes
                card.setAttribute('id', `${parentId}${this.cards.length+1}`)
                card.className = 'card'

                // set the default style
                card.style.minWidth = '400px'
                card.style.minHeight = '300px'
                card.style.backgroundColor = 'lightyellow'
                card.style.border = '2px solid black'
                card.style.borderRadius = '5px'
                card.style.boxShadow = '10px 10px 10px 1px rgba(0, 0, 0, 0.2)'
                card.style.margin = '10px'
                card.style.display = 'inline-block'
                card.style.overflowWrap = 'break-word'
                
                // add the card into the parent body
                const parent = document.getElementById(parentId)
                parent.append(card)

                // add title if provided one
                const title = document.createElement('div')
                title.className = 'card-title'
                title.style.display = 'block'
                title.style.fontWeight = 'bold'
                title.style.fontFamily = 'sans-serif'
                title.style.fontSize = 'x-large'
                title.style.margin = '10px'
                title.style.overflowWrap = 'break-word'
                title.style.borderBottom = '1px solid black'
                if (titleName) {
                    title.innerHTML = titleName
                } else {
                    title.innerHTML = card.id
                }
                card.append(title)

                // create an empty card body by default
                const body = document.createElement('div')
                body.className = 'card-body'
                body.classList.add('expanded')
                body.style.fontFamily = 'sans-serif'
                body.style.textAlign = 'justify'
                body.style.textJustify = 'inter-word'
                body.style.margin = '10px'
                body.style.overflowWrap = 'break-word'
                card.append(body)

                
                // add the card in the array
                this.cards.push(card)

                return card
            } else {
                const card = document.createElement('div')

                // still has a unique id
                card.setAttribute('id', `${parentId}${this.cards.length+1}`)
                card.className = 'card'

                // copy the style from templateCard
                const completeStyle = getComputedStyle(templateCard).cssText;
                card.style.cssText = completeStyle;

                // add the card into the parent body
                const parent = document.querySelector('#' + parentId)
                parent.append(card)

                // add title if provided one
                const title = document.createElement('div')
                title.className = 'card-title'
                title.style.display = 'block'
                title.style.fontWeight = 'bold'
                title.style.fontFamily = 'sans-serif'
                title.style.fontSize = 'x-large'
                title.style.margin = '10px'
                title.style.overflowWrap = 'break-word'
                title.style.borderBottom = '1px solid black'
                if (titleName) {
                    title.innerHTML = titleName
                } else {
                    title.innerHTML = card.id
                }
                card.append(title)

                // create an empty card body by default
                const body = document.createElement('div')
                body.className = 'card-body'
                body.classList.add('expanded')
                body.style.fontFamily = 'sans-serif'
                body.style.textAlign = 'justify'
                body.style.textJustify = 'inter-word'
                body.style.margin = '10px'
                body.style.overflowWrap = 'break-word'
                card.append(body)
                
                // add the card in the array
                this.cards.push(card)

                return card
            }
            
        },

        removeCard: function(parentId, card) {
            const body = card.parentElement

            // remove from array
            let removedCardIndex = null
            let i = 0
            let notCardCount= 0
            while (i<body.childNodes.length) {
                // check that it is a card
                if (body.childNodes[i].id.includes(parentId)) {
                    if (card.id === body.childNodes[i].id) {
                        removedCardIndex = i
                        break
                    }
                } else {
                    notCardCount += 1
                }
                i += 1
                
            }
            // remove elements that are not cards
            removedCardIndex -= notCardCount
            if (removedCardIndex) {
                this.cards.splice(removedCardIndex, 1)

                // remove from DOM
                body.removeChild(card)
            }

            
        },

        getCardById: function(id) {
            return document.getElementById(id)
        },

        getCardId: function(card) {
            for (let i=0; i<this.cards.length; i++) {
                if (this.cards[i].id === card.id) {
                    return i+1
                }
            }
        },

        // modifies all cards with a numbered title
        modifyTitles: function(text) {
            for (let i = 0; i < this.cards.length; i++) {
                const title = this.cards[i].getElementsByClassName('card-title')[0]
                title.innerHTML = `${text} ${i+1}`
            }
        },

        // modifies title of one card
        modifyTitleSingle: function(card, text) {
            const title = card.getElementsByClassName('card-title')[0]
            title.innerHTML = text.toString()
        },

        modifyColors: function(color) {
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].style.backgroundColor = color
            }
        },

        // modify the color of one card
        modifyColorSingle: function(card, color) {
            card.style.backgroundColor = color
        },

        // adds an html element to every card
        addToBody: function(element) {
            for (let i=0; i<this.cards.length; i++) {
                const body = this.cards[i].getElementsByClassName('card-body')[0]
                body.append(element.cloneNode(true))
            }
        },

        // add an html element to a single card
        addToBodySingle: function(card, element) {
            const body = card.getElementsByClassName('card-body')[0]
            body.append(element.cloneNode(true))
        },

        // returns an array of all cards with the given color
        filterByColor: function(color) {
            const filtered = []
            for (let i=0; i<this.cards.length; i++) {
                if (this.cards[i].style.backgroundColor === color) {
                    filtered.push(this.cards[i])
                }
            }
            return filtered
        },

        // modify sizes of all cards
        modifySizes: function(width, height) {
            for (let i=0; i<this.cards.length; i++) {
                this.cards[i].style.minWidth = `${width}px`
                this.cards[i].style.minHeight = `${height}px`
            }
        },

        // modify size of a single card
        modifySizeSingle: function(card, width, height) {
            card.style.minWidth = `${width}px`
            card.style.minHeight = `${height}px`
        },

        // make all cards collapsible
        makeCollapsible: function() {
            for (let i=0; i<this.cards.length; i++) {
                const title = this.cards[i].getElementsByClassName('card-title')[0]
                const body = this.cards[i].getElementsByClassName('card-body')[0]

                // give the card a collapsible class
                this.cards[i].classList.add('collapsible')

                // make the title the element to collapse the body
                title.innerHTML = '- ' + title.innerHTML
                title.style.cursor = 'pointer'
                title.addEventListener('click', function() {
                    this.classList.toggle("active");
                    if (body.classList.contains('expanded')){
                        title.innerHTML = '+ ' + title.innerHTML.substring(1)
                        body.style.height = '0px'
                        body.classList.remove('expanded')
                    } else {
                        title.innerHTML = '- ' + title.innerHTML.substring(1)
                        body.style.height = body.scrollHeight + "px"
                        body.classList.add('expanded')
                    }
                })
                

                // make body the collapsible element
                body.style.overflow = 'hidden'
                body.style.transition = 'height 0.2s ease-out'
                this.cards[i].style.minHeight = null
            }
        },

        // make a card collapsible
        makeCollapsibleSingle: function(card) {
            const title = card.getElementsByClassName('card-title')[0]
            const body = card.getElementsByClassName('card-body')[0]

            // give the card a collapsible class
            card.classList.add('collapsible')

            // make the title the element to collapse the body
            title.innerHTML = '- ' + title.innerHTML
            title.style.cursor = 'pointer'
            title.addEventListener('click', function() {
                this.classList.toggle("active");
                if (body.classList.contains('expanded')){
                    title.innerHTML = '+ ' + title.innerHTML.substring(1)
                    body.style.height = '0px'
                    body.classList.remove('expanded')
                } else {
                    title.innerHTML = '- ' + title.innerHTML.substring(1)
                    body.style.height = body.scrollHeight + "px"
                    body.classList.add('expanded')
                }
            })
            

            // make body the collapsible element
            body.style.overflow = 'hidden'
            body.style.transition = 'height 0.2s ease-out'
            card.style.minHeight = null
        },

        makeDraggable: function() {
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].style.cursor = 'move'
                this.cards[i].setAttribute('draggable', 'true')
                this.cards[i].addEventListener('dragstart', drag)
                this.cards[i].addEventListener('drop', drop)
                this.cards[i].addEventListener('dragover', allowDrop)
                this.cards[i].addEventListener('dragenter', dragEnter)
                this.cards[i].addEventListener('dragleave', dragLeave)
                this.cards[i].addEventListener('dragstart', dragStart)
                this.cards[i].addEventListener('dragend', dragEnd)
            }
        },

        makeUndraggable: function() {
            for (let i = 0; i < this.cards.length; i++) {
                this.cards[i].style.cursor = 'auto'
                this.cards[i].setAttribute('draggable', 'false')
                this.cards[i].removeEventListener('dragstart', drag)
                this.cards[i].removeEventListener('drop', drop)
                this.cards[i].removeEventListener('dragover', allowDrop)
                this.cards[i].removeEventListener('dragenter', dragEnter)
                this.cards[i].removeEventListener('dragleave', dragLeave)
                this.cards[i].removeEventListener('dragstart', dragStart)
                this.cards[i].removeEventListener('dragend', dragEnd)
            }
        },

        // user interactive button functions ------------------------------------------------------------------------

        // button for adding a card to a CustomCards object
        addCardButton: function(parentId, cardParentId, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.addCard(cardParentId)
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addCardWTemplateButton: function(parentId, cardParentId, name, template) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.addCard(cardParentId, 'Created with template', template)
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addChangeTitleButton: function(parentId, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const input = document.createElement("input")
            input.id = 'title-input'
            input.setAttribute('type', "text")
            input.setAttribute('name', "title")
            input.setAttribute('value', 'new title')

            const confirm = document.createElement('button')
            confirm.id = 'title-confirm'
            confirm.className = 'button'
            confirm.addEventListener('click', function() {
                if (_this.cards.length == 1) {
                    _this.modifyTitleSingle(_this.cards[0], input.value)
                } else {
                    _this.modifyTitles(input.value)
                }
                parent.removeChild(document.getElementById('title-input'))
                parent.removeChild(document.getElementById('title-confirm'))
            })
            confirm.innerHTML = 'Confirm'

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                if (document.getElementById('title-input') == null){
                    parent.append(input)
                    parent.append(confirm)
                }
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addEditBodyButton: function(parentId, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const input = document.createElement("div")
            input.id = 'body-input'
            input.innerHTML = 'Click here to add some text to the card!'
            input.setAttribute("contenteditable", "true")

            const confirm = document.createElement('button')
            confirm.id = 'body-confirm'
            confirm.className = 'button'
            confirm.addEventListener('click', function() {
                for (let i = 0; i < _this.cards.length; i++) {
                    const body = _this.cards[i].getElementsByClassName('card-body')[0]
                    body.innerHTML = input.innerHTML
                }
                parent.removeChild(document.getElementById('body-confirm'))
                parent.removeChild(document.getElementById('body-input'))
            })
            confirm.innerHTML = 'Confirm'

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                if (document.getElementById('body-confirm') == null){
                    parent.append(input)
                    parent.append(confirm)
                }
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addAppendElementButton: function(parentId, elem, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.addToBody(elem)
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addModifyColorButton: function(parentId, color, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.modifyColors(color)
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addModifySizeButton: function(parentId, width, height, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.modifySizes(width, height)
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addCollapsibleButton: function(parentId, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.addEventListener('click', function() {
                _this.makeCollapsible()
                button.disabled = 'true'
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addDraggableButton: function(parentId, name) {

            const _this = this
            const parent = document.getElementById(parentId)

            const button = document.createElement('button')
            button.className = 'button'
            button.classList.add('undraggable')
            button.addEventListener('click', function() {
                if (button.classList.contains('undraggable')) {
                    _this.makeDraggable()
                    button.classList.add('draggable')
                    button.classList.remove('undraggable')
                } else {
                    _this.makeUndraggable()
                    button.classList.add('undraggable')
                    button.classList.remove('draggable')
                }              
                // button.disabled = 'true'
            })
            button.innerHTML = name.toString()

            parent.append(button)
        },

        addRemoveCardBox: function(parentId) {

            const _this = this
            const parent = document.getElementById(parentId)

            const box = document.createElement('div')
            box.id = 'remove-card'
            box.addEventListener('drop', drop)
            box.addEventListener('dragover', allowDrop)
            box.addEventListener('dragenter', dragEnter)
            box.addEventListener('dragleave', dragLeave)
            box.addEventListener('dragstart', dragStart)
            box.addEventListener('dragend', dragEnd)

            parent.append(box)
        },
    }

    // private functions ------------------------------------------------------------------------

    // functions to handle drag and drop
    function drag(e) {
        e.dataTransfer.setData("text", e.currentTarget.id)
    }

    function drop(e) {
        e.preventDefault()

        // if dropped somewhere to remove it then remove the card
        if (e.currentTarget.id == 'remove-card') {
            let data = e.dataTransfer.getData("text")
            const parent = document.getElementById(data).parentElement
            parent.removeChild(document.getElementById(data))
            e.currentTarget.style.borderStyle = 'solid'
            e.currentTarget.style.filter = 'brightness(100%)'
            return
        }

        let dragindex = 0;
        let dropIndex = 0;
        let clone = ""

        clone = e.currentTarget.cloneNode(true)
        const parent = e.currentTarget.parentElement
        let data = e.dataTransfer.getData("text")
        if (document.getElementById(data).parentElement != parent) { // prevent switching of different card types
            e.currentTarget.style.borderStyle = 'solid'
            e.currentTarget.style.filter = 'brightness(100%)'
            e.currentTarget.cursor = 'no-drop'
            return;
        }
        if (data === e.currentTarget.id) return; // prevent duplication when dropped onto itself
        let nodelist = parent.childNodes
        for (let i = 0; i < nodelist.length; i++) {
            if (nodelist[i].id == data) {
                dragindex = i
                break
            }

        }
        for (let i = 0; i < nodelist.length; i++) {
            if (nodelist[i].id == e.currentTarget.id) {
                dropIndex = i
                break
            }

        }
        
        e.currentTarget.style.borderStyle = 'solid'
        e.currentTarget.style.filter = 'brightness(100%)'
        parent.insertBefore(document.getElementById(data), parent.childNodes[dropIndex])
        parent.insertBefore(e.currentTarget, parent.childNodes[dragindex])
        // parent.removeChild(e.currentTarget)

        // parent.replaceChild(document.getElementById(data), e.currentTarget)
        // parent.insertBefore(clone, parent.childNodes[dragindex])
        // addPrevListeners(clone)
    }

    function addPrevListeners(element) {
        // draggable listeners
        element.addEventListener('dragstart', drag)
        element.addEventListener('drop', drop)
        element.addEventListener('dragover', allowDrop)
        element.addEventListener('dragenter', dragEnter)
        element.addEventListener('dragleave', dragLeave)
        element.addEventListener('dragstart', dragStart)
        element.addEventListener('dragend', dragEnd)

        // collapsible lisenter if it is collapsible
        if (element.classList.contains('collapsible')) {
            const title = element.getElementsByClassName('card-title')[0]
            const body = element.getElementsByClassName('card-body')[0]
            title.addEventListener('click', function() {
                this.classList.toggle("active");
                if (body.classList.contains('expanded')){
                    title.innerHTML = '+ ' + title.innerHTML.substring(1)
                    body.style.height = '0px'
                    body.classList.remove('expanded')
                } else {
                    title.innerHTML = '- ' + title.innerHTML.substring(1)
                    body.style.height = body.scrollHeight + "px"
                    body.classList.add('expanded')
                }
            })
        }

        // default style
        element.style.borderStyle = 'solid'
        element.style.filter = 'brightness(100%)'
    }

    function allowDrop(e) {
        e.preventDefault()
    }

    function dragEnter(e) {
        e.preventDefault()
        this.lastEnter = e.target
        this.style.borderStyle = 'dashed'
        this.style.filter = 'brightness(75%)'
    }

    function dragLeave(e) {
        if (this.lastEnter === e.target) {
            this.style.borderStyle = 'solid'
            this.style.filter = 'brightness(100%)'
        }
    }

    function dragStart() {
        this.style.opacity = '0.75'
    }

    function dragEnd() {
        this.style.borderStyle = 'solid'
        this.style.filter = 'brightness(100%)'
        this.style.opacity = '1'
    }


global.CustomCards = global.CustomCards || CustomCards

})(window, window.document, $); // pass the global window object and jquery to the anonymous function. They will now be locally scoped inside of the function