import {component$, Slot} from '@builder.io/qwik';
import Header from '~/components/header/Header';
import Footer from "~/components/footer/Footer";

export default component$(() => {
    return (
        <>
        <div class='content'>
            <Header/>
            <main>
                <Slot/>
            </main>
        </div>
            <Footer/>

        </>)
});
