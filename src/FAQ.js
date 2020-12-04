import React from 'react';


export const FAQ = () => {
    const faqs = [
        {
            id: 1,
            question: "How do you make your doughnuts?",
            answer: "With lots of love, and a little bit of crazy"
        },
        {
            id: 2,
            question: "Can you share your recipes?",
            answer: "Yep... for a million dollars!!"
        },
        {
            id: 3,
            question: "Is React really that hard??",
            answer: "Nope. Just need to be patient with yourself!"
        }
    ]

    return (
        <>
            <h1>Frequently Asked Questions</h1>
            {faqs.map(faq => <div key={faq.id}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
            </div>
            )}
        </>
    )
}