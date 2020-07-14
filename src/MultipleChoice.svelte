<!-- TODO:
- Close button should be optional
- Cancel option should be optional
-->

<script>
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';

    // Props
    export let questionText;
    export let possibleAnswers; // id, text
    export let highlightedAnswerId = null; // TODO: use undefined instead
    export let visible = false;

    // Public Methods
    // TODO: is this the correct way to do this with Svelte?
    export const setVisible = function(value) {
        visible = value;
    };

    // Events
    const dispatch = createEventDispatcher();
</script>

<style>
.multiple-choice-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
/* TODO: the close button should probably be in a top nav bar */
.multiple-choice-close {
    position: fixed;
    top: 0;
    right: 1rem;
}
</style>

{#if visible}
<div
    transition:scale
    class="multiple-choice-container flex bg-white gray tc h-100 justify-center flex-column">
    <a  href="#0"
        class="multiple-choice-close f1 link dim db gray"
        on:click|preventDefault={() => visible = false}>×</a>
    <h1 class="f3">{questionText}</h1>
    <ul class="list pl0 ml0 center mw7 ba b--light-silver br2">
        {#each possibleAnswers as possibleAnswer}
        <li class="bb b--light-silver {highlightedAnswerId === possibleAnswer.id ? 'bg-near-white' : ''}">
            <a  href="#0"
                class="w-100 pv3 ph4 f5 link dim dib {highlightedAnswerId === possibleAnswer.id ? 'gray b' : 'gray'}"
                on:click|preventDefault={() => {
                    visible = false;
                    dispatch('answerSelected', {
                        selectedAnswerId: possibleAnswer.id,
                        selectedAnswerText: possibleAnswer.text
                    });
                }}>{possibleAnswer.text}</a>
        </li>
        {/each}
        <li class="b--light-silver">
            <a  href="#0"
                class="w-100 pv3 ph4 f5 link dim dib gray b"
                on:click|preventDefault={() => visible = false}>Cancel</a>
        </li>
    </ul>
</div>
{/if}