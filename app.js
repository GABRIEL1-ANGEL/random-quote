const generateQuoteBtn = document.getElementById('quoteBtn')
const quoteOutput = document.getElementById('quoteOutput')
const authorOutput = document.getElementById('authorOutput')

generateQuoteBtn.addEventListener('click', generateQuote)

const arrayOfQuotes = [
    {
        author: 'Albert Einstein',
        quote:
        'We cannot solve problems with the kind of thinking we employed when we came up with them.',
     },

    {
        author: 'Herman Melville',
        quote:
        'It is better to fail in originality than to succeed in imitation.',
     },

    {
        author: 'Winston Churchill',
        quote:
        'Success is not final; failure is not fatal: It is the courage to continue that counts.',
     },
     {
        author: 'Colin R. Davis',
        quote:
        'The road to success and the road to failure are almost exactly the same.',
     },
     {
        author: 'Henry David Thoreau',
        quote:
        'Success usually comes to those who are too busy to be looking for it',
     },
     {
        author: 'Dale Carnegie',
        quote:
        'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
     },
     {
        author: 'Estée Lauder',
        quote:
        'I never dreamed about success. I worked for it.',
     }
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1)
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`
}

