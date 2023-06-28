import { component$, useStyles$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'
import HeaderStyle from './header.css?inline'

export default component$(() => {
    useStyles$(HeaderStyle)
    return (

        <nav class="navbar">
            <div class="navbar__logo">
                <img src="/assets/logo.svg" alt="logo" width={74} height={22} />

            </div>
            <div class="navbar__links">
                <Link href='/' class="navbar__link"><span class="navbar__link-decoration">#</span>home</Link>
                <Link href='/works' class="navbar__link"><span class="navbar__link-decoration">#</span>works</Link>
                <Link href='/about-me' class="navbar__link"><span class="navbar__link-decoration">#</span>about-me</Link>
                <Link href='/contacts' class="navbar__link"><span class="navbar__link-decoration">#</span>contacts</Link>
            </div>
        </nav>
    )
})
