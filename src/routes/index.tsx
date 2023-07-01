import {component$, useStyles$, useStylesScoped$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import RandomQuote from "~/components/random-quote/RandomQuote";
import Projects from "~/components/projects/Projects";
import {routeLoader$} from "@builder.io/qwik-city";

import IndexStyle from './index.css?inline'
import Skills from "~/components/skills/Skills";
import AboutMe from "~/components/about-me/AboutMe";
import Contacts from "../components/contacts/Contacts";

interface Quote {
    quote: string,
    author: string
}


export const useGetRandomQuote = routeLoader$(async () => {

    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")

    const quote = await res.json();
    return quote[0] as Quote;
})

export default component$(() => {
    useStyles$(IndexStyle)
    const quote = useGetRandomQuote()


    return (
        <>
            <div class="hero">
                <div class="hero__content">
                    <p class="hero__title">Samy is
                        a <span>web developer</span> and <span>cyber security enthusiast</span></p>
                    <p class="hero__text">He crafts responsive websites where technologies meet creativity</p>
                    <button class="button button--primary">Contact Me!</button>
                </div>
                <div class="hero__image">
                    <img src="/assets/profile.png" alt="profile" width={469} height={386}/>
                    <div class="hero__current boxed">currently working on <span>Portfolio</span></div>
                </div>
            </div>
            <RandomQuote quote={quote.value.quote} author={quote.value.author}/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
        </>
    )
});

export const head: DocumentHead = {
    title: "Welcome to my Portfolio",
    meta: [
        {
            name: "description",
            content: "a portfolio where i showcase my different projects",
        },
    ],
};
