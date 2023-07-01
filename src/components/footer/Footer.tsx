import {component$, useStylesScoped$} from "@builder.io/qwik";
import footerStyle from "./footer.css"

export default component$(() => {

    useStylesScoped$(footerStyle);

    return (
        <div class={"footer"}>
            <div class={"footer-content"}>
                <div>
                    <div class={"footer__email"}>
                        <img src={"/assets/logo-small.png"} alt={"small logo"}/>
                        <p class={"footer__txt"}>m_debaili@estin.dz</p>
                    </div>
                    <p class={"footer__text"}>front-end developer and cyber-security enthusiast</p>
                </div>
                <div class={"footer__media"}>
                    <h2>Media</h2>
                    <div>
                        <a href={"https://github.com/samdem-ai"} target="_blank"><img src={"/assets/Github.svg"} alt={"logo"}/></a>
                        <a href={"#"} target="_blank"><img src={"/assets/Discord.svg"} alt={"logo"}/></a>
                        <a href={"#"} target="_blank"><img src={"/assets/Figma.svg"} alt={"logo"}/></a>
                    </div>
                </div>
            </div>
            <p>© Copyright 2022. Made by Samy</p>
        </div>
    )
})