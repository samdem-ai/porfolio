import {component$, useStylesScoped$} from "@builder.io/qwik";
import contactsStyle from "./contacts.css"

export default component$(() => {

    useStylesScoped$(contactsStyle)

    return (
        <>
            <div class={"header"}>
                <p class="header-title header-title--even-smaller"><span>#</span>contacts</p>
            </div>
            <div class={"contacts"}>
                <div class={"contacts__text-section"}>
                    <p class={"contacts__text"}>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </p>
                </div>
                <div class={"contacts__table-section"}>
                    <h3>Message me here</h3>
                    <div class={"message"}>
                        <img src={"/assets/Discord.svg"}/>
                        <p>Samy Debaili#7212</p>
                    </div>
                    <div class={"message"}>
                        <img src={"/assets/Email.svg"}/>
                        <p>m_debaili@estin.dz</p>
                    </div>
                </div>
            </div>
        </>
    )
})