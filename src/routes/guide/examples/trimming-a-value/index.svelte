<svelte:head>
	<title>FormValidation • Trimming a value</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Trimming a value</h1>
    
    <section class="mv5">
        <p class="lh-copy">The notEmpty validator does not remove the blank spaces at the beginning and ending of the value. It means that a string like <code>'   '</code> is treated as valid.</p>
        <p class="lh-copy">If you want to prevent this, then use the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin to trim the value before validating it.</p>
        <Demo prefix="/guide/examples/trimming-a-value" frameworks={['tachyons']} />
    </section>

    <RelatedValidators validators={['notEmpty']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>
