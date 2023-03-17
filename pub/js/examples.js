"use strict";


const books = new CustomCards()

// add some books
const book1 = books.addCard('books')
const book2 = books.addCard('books')
const book3 = books.addCard('books')
const book4 = books.addCard('books')

// give them each an id and a color
books.modifyTitles('Book ID:')
books.modifyColors('lightblue')
books.modifyColorSingle(book3, 'lightyellow')
books.modifySizeSingle(book3, 500, 300)

// modify a single card title
books.modifyTitleSingle(book2, 'Try the collapsible feature!')


// book infos
const img0 = document.createElement('img')
img0.src =  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105';
img0.style.width = '150px'
img0.style.margin = '10px'
books.addToBodySingle(book1, img0)

const text0 = document.createElement('h3')
text0.innerHTML = 'The King of Drugs' + '<h5 style="margin-top: 5px">Nora Barrett</h5>'
text0.style.display = 'inline-block'
text0.style.verticalAlign = 'top'
books.addToBodySingle(book1, text0)


const img1 = document.createElement('img')
img1.src =  'https://marketplace.canva.com/EAD7WWWtKSQ/1/0/251w/canva-purple-and-red-leaves-illustration-children%27s-book-cover-hNI7HYnNVQQ.jpg';
img1.style.width = '150px'
img1.style.margin = '10px'
books.addToBodySingle(book2, img1)

const text1 = document.createElement('h3')
text1.innerHTML = 'Amara The Brave' + '<h5 style="margin-top: 5px">Matt Zhang</h5>'
text1.style.display = 'inline-block'
text1.style.verticalAlign = 'top'
books.addToBodySingle(book2, text1)


const img2 = document.createElement('img')
img2.src =  'https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale';
img2.style.width = '150px'
img2.style.margin = '10px'
books.addToBodySingle(book3, img2)

const text2 = document.createElement('h3')
text2.innerHTML = 'The Martian' + '<h5 style="margin-top: 5px">Andy Weir</h5>'
text2.style.display = 'inline-block'
text2.style.verticalAlign = 'top'
books.addToBodySingle(book3, text2)


// make book cards draggable
books.makeDraggable()

// make card collapsible
// books.makeCollapsibleSingle(book1)
// books.makeCollapsibleSingle(book2)
// books.makeCollapsibleSingle(book3)
books.makeCollapsible()


// removing a book
books.removeCard('books', book4)

// add some text to all book cards that are lightblue
const lightblueBooks = books.filterByColor('lightblue')
for (let i=0; i<lightblueBooks.length; i++) {
    const textByColor = document.createElement('p')
    textByColor.innerHTML = 'We are all lightblue colored book cards! Notice that when you hover over a draggable card the mouse icon changes to a move icon, and if you try to drag a card onto something undraggable the cursor will show the no-drop icon'
    textByColor.style.display = 'inline-block'
    textByColor.style.verticalAlign = 'top'
    books.addToBodySingle(lightblueBooks[i], textByColor)
}

// show that card expands as content grows
const longText = document.createElement('p')
longText.innerHTML = "This card has been made wider, and notice that the card will expand in size as the content grows!<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi. Donec enim diam vulputate ut pharetra sit amet aliquam id. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Vulputate sapien nec sagittis aliquam. Ipsum faucibus vitae aliquet nec ullamcorper. Consectetur adipiscing elit ut aliquam purus sit amet. Quis viverra nibh cras pulvinar. Urna cursus eget nunc scelerisque viverra mauris. Neque sodales ut etiam sit. Tortor vitae purus faucibus ornare. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet luctus venenatis lectus magna. Amet consectetur adipiscing elit pellentesque habitant. Mauris augue neque gravida in fermentum. Mauris commodo quis imperdiet massa. Nec feugiat in fermentum posuere urna.<br><br>Mollis aliquam ut porttitor leo a diam sollicitudin. Ante in nibh mauris cursus mattis. Lacus luctus accumsan tortor posuere ac ut consequat. Ultrices dui sapien eget mi proin sed libero enim sed. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Orci phasellus egestas tellus rutrum. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Eu consequat ac felis donec et odio pellentesque. Maecenas ultricies mi eget mauris. Arcu bibendum at varius vel pharetra vel. Aliquam sem et tortor consequat id. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Vitae nunc sed velit dignissim sodales ut. Pretium lectus quam id leo in vitae turpis.<br><br>Interdum velit laoreet id donec ultrices tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes. A pellentesque sit amet porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. A iaculis at erat pellentesque adipiscing. Et netus et malesuada fames ac turpis egestas. Mi eget mauris pharetra et ultrices. Pretium aenean pharetra magna ac placerat vestibulum lectus. Arcu non sodales neque sodales ut etiam sit amet. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Et netus et malesuada fames ac turpis egestas integer. Commodo ullamcorper a lacus vestibulum. Et magnis dis parturient montes nascetur ridiculus. Dui ut ornare lectus sit amet est placerat in. Molestie at elementum eu facilisis sed. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Gravida quis blandit turpis cursus in hac habitasse platea dictumst."
longText.style.display = 'inline-block'
longText.style.verticalAlign = 'top'
books.addToBodySingle(book3, longText)


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const loaners = new CustomCards()

// add some loaners
const loaner1 = loaners.addCard('loaners')
const loaner2 = loaners.addCard('loaners')
const loaner3 = loaners.addCard('loaners')

// give them a color and id
loaners.modifyColors('lightgreen')

loaners.modifyTitles('Loaner ID:')


// make some loaner cards draggable
loaners.makeDraggable()

const loaner4 = loaners.addCard('loaners')
const loaner5 = loaners.addCard('loaners', 'Same template as loaner 4', loaners.getCardById('loaners4'))


// book infos
const img3 = document.createElement('img')
img3.src =  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
img3.style.width = '150px'
img3.style.margin = '10px'
loaners.addToBodySingle(loaner1, img3)

const text3 = document.createElement('h3')
text3.innerHTML = 'Bob'
text3.style.display = 'inline-block'
text3.style.verticalAlign = 'top'
loaners.addToBodySingle(loaner1, text3)


const img4 = document.createElement('img')
img4.src =  'https://us.123rf.com/450wm/dolgachov/dolgachov1505/dolgachov150500234/39648705-picture-of-smiling-handsome-businessman-in-office.jpg?ver=6';
img4.style.width = '150px'
img4.style.margin = '10px'
loaners.addToBodySingle(loaner2, img4)

const text4 = document.createElement('h3')
text4.innerHTML = 'John'
text4.style.display = 'inline-block'
text4.style.verticalAlign = 'top'
loaners.addToBodySingle(loaner2, text4)


const img5 = document.createElement('img')
img5.src =  'https://thumbs.dreamstime.com/b/business-man-profile-brazilian-white-background-38563179.jpg';
img5.style.width = '150px'
img5.style.margin = '10px'
loaners.addToBodySingle(loaner3, img5)

const text5 = document.createElement('h3')
text5.innerHTML = 'Xavier'
text5.style.display = 'inline-block'
text5.style.verticalAlign = 'top'
const explainationTemplate = document.createElement('p')
explainationTemplate.innerHTML = 'I am not a collapsible card'
loaners.addToBodySingle(loaner3, text5)
loaners.addToBodySingle(loaner3, explainationTemplate)

// make some cards collapsible
loaners.makeCollapsibleSingle(loaner1)
loaners.makeCollapsibleSingle(loaner2)

const noStyle = document.createTextNode('I have no style; i.e. the default style, and by default I am undraggable and uncollapsible')
loaners.addToBodySingle(loaner4, noStyle)

const tempalteCard = document.createTextNode('Used loaner 4 as template, so whatever style loaner 4 had when I was created will be the style I inherit, if loaner 4 changed style after I was created I am not affected')
loaners.addToBodySingle(loaner5, tempalteCard)

// make loaner cards that are lightgreen undraggable
const lightgreenLoaners = loaners.filterByColor('lightgreen')
for (let i=0; i<lightgreenLoaners.length; i++) {
    const textByColor = document.createElement('p')
    textByColor.innerHTML = "Cards cannot be drag and switched wtih cards of different types, so a loaner cannot switch positions with a book and vice versa"
    textByColor.style.display = 'inline-block'
    textByColor.style.verticalAlign = 'top'
    loaners.addToBodySingle(lightgreenLoaners[i], textByColor)
}
