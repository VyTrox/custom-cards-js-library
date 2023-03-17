"use strict";


// showcase add card feature
const add = new CustomCards()
add.addCardButton('add-bt', 'card-add', 'Add a Card')


// showcase add card based on template feature
const addWTemplate = new CustomCards()
const addWTemplate1 = addWTemplate.addCard('card-add-template')
addWTemplate.modifyColors('cyan')
addWTemplate.modifySizes(500, 200)
addWTemplate.addCardWTemplateButton('add-template-bt', 'card-add-template', 'Add a Card based on template', addWTemplate1)


// showcase change title feature
const changeTitleSingle = new CustomCards()
const changeTitleSingle1 = changeTitleSingle.addCard('card-change-title-single')
changeTitleSingle.addChangeTitleButton('change-title-single-bt', 'Change title')

const changeTitle = new CustomCards()
const changeTitle1 = changeTitle.addCard('card-change-title')
const changeTitle2 = changeTitle.addCard('card-change-title')
const changeTitle3 = changeTitle.addCard('card-change-title')
changeTitle.addChangeTitleButton('change-title-bt', 'Change titles')


// showcase edit card body feature
const editBodySingle = new CustomCards()
const editBodySingle1 = editBodySingle.addCard('card-edit-body-single')
editBodySingle.addEditBodyButton('edit-body-single-bt', 'Edit Card text')


// showcase add element to body feature
const addToBody = new CustomCards()
const addToBody1 = addToBody.addCard('card-add-elem')
const circle = document.createElement('span')
circle.className = 'circle'
addToBody.addAppendElementButton('add-elem-bt', circle, 'Add a blue circle to Card')


// showcase modify color feature
const modifyColor = new CustomCards()
const modifyColor1 = modifyColor.addCard('card-modify-color')
const modifyColor2 = modifyColor.addCard('card-modify-color')
const modifyColor3 = modifyColor.addCard('card-modify-color')
modifyColor.addModifyColorButton('modify-color-bt', 'lightgreen', 'Change to light green')
modifyColor.addModifyColorButton('modify-color-bt', 'lightpink', 'Change to light pink')
modifyColor.addModifyColorButton('modify-color-bt', 'lightseagreen', 'Change to light seagreen')


// showcase modify size feature
const modifySize = new CustomCards()
const modifySize1 = modifySize.addCard('card-modify-size')
const modifySize2 = modifySize.addCard('card-modify-size')
const modifySize3 = modifySize.addCard('card-modify-size')
modifySize.addModifySizeButton('modify-size-bt', 200, 150, 'Change to a small size')
modifySize.addModifySizeButton('modify-size-bt', 400, 300, 'Change to default size')
modifySize.addModifySizeButton('modify-size-bt', 600, 450, 'Change to a big size')


// showcase collapsible feature
const collapsible = new CustomCards()
const collapsible1 = collapsible.addCard('card-collapsible')
const collapsible2 = collapsible.addCard('card-collapsible')
const collapsible3 = collapsible.addCard('card-collapsible')
collapsible.addToBodySingle(collapsible1, circle)
collapsible.addToBodySingle(collapsible2, circle)
collapsible.addToBodySingle(collapsible2, circle)
collapsible.addToBodySingle(collapsible3, circle)
collapsible.addToBodySingle(collapsible3, circle)
collapsible.addToBodySingle(collapsible3, circle)
collapsible.addCollapsibleButton('collapsible-bt', 'Make Cards collapsible')


// showcase drag and drop position switch feature
const draggable = new CustomCards()
const draggable1 = draggable.addCard('card-draggable')
const draggable2 = draggable.addCard('card-draggable')
const draggable3 = draggable.addCard('card-draggable')
// example elements used to demonstrate feature
const text1 = document.createElement('div')
text1.innerHTML = 'this is the first card'
const text2 = document.createElement('div')
text2.innerHTML = 'this is the second card'
const text3 = document.createElement('div')
text3.innerHTML = 'this is the third card'
draggable.addToBodySingle(draggable1, text1)
draggable.addToBodySingle(draggable2, text2)
draggable.addToBodySingle(draggable3, text3)
draggable.addDraggableButton('draggable-bt', 'Toggle draggability')
// a box where cards can be dropped in and deleted
draggable.addRemoveCardBox('remove-box')


// showcase a card with combined features
const combined = new CustomCards()
const combined1 = combined.addCard('card-combined')
const combined2 = combined.addCard('card-combined')
const combined3 = combined.addCard('card-combined')
combined.addChangeTitleButton('combined-bt', 'Change titles')
combined.addEditBodyButton('combined-bt', 'Edit Cards text')
combined.addModifyColorButton('combined-bt', 'lightgreen', 'Change to light green')
combined.addModifyColorButton('combined-bt', 'lightpink', 'Change to light pink')
combined.addModifyColorButton('combined-bt', 'lightseagreen', 'Change to light seagreen')
combined.addModifySizeButton('combined-bt', 200, 150, 'Change to a small size')
combined.addModifySizeButton('combined-bt', 400, 300, 'Change to default size')
combined.addModifySizeButton('combined-bt', 600, 450, 'Change to a big size')
combined.addCollapsibleButton('combined-bt', 'Make Cards collapsible')
combined.addDraggableButton('combined-bt', 'Toggle draggability')