import {component$, useStylesScoped$} from "@builder.io/qwik";
import aboutMeStyles from "./about-me.css"

export default component$(() => {
    useStylesScoped$(aboutMeStyles);

    return (
        <>
            <div class={"header"}>
                <p class="header-title header-title--medium"><span>#</span>about-me</p>
            </div>
            <div class={"about-me"}>
                <div class={"about-me__text-container"}>
                    <p class={"about-me__text"}>Hello, i’m Samy!</p>
                    <p class={"about-me__text"}>I’m a self-taught front-end developer based in Algiers, Algeria. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences. </p>
                    <p class={"about-me__text"}>Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</p>
                    <button class={"button button--primary"}>Read More {"==>"}</button>
                </div>
                <div class={"about-me__image"}>
                    <img src={"/assets/about-me.png"} alt={"about me image"} width={343} height={490}/>
                </div>
            </div>

        </>
    )
})