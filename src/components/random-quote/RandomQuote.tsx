import { component$, useStylesScoped$ } from "@builder.io/qwik";
import StyledQuote from './random-quote.css?inline'


interface QuoteProps {
    quote: string,
    author: string
}

export default component$((props: QuoteProps) => {
    useStylesScoped$(StyledQuote)


    return (

        <>
            <div class="quote">
                <div>
                    <p class='quote__text boxed'>{props.quote}</p>
                    <p class="quote__author boxed">{props.author}</p>
                </div>
            </div>

        </>
    )
})