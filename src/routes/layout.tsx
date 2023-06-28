import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/Header';

export default component$(() => {
  return (
    <div class='content'>
      <Header />
      <main>
        <Slot />
      </main>
    </div>)
});
