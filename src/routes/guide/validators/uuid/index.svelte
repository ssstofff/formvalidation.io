<svelte:head>
	<title>FormValidation • uuid validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">uuid validator</h1>
    <h2 class="f4 fw4 tc">Validate an <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" class="blue dim link">UUID</a></h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-uuid___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>version</code></td>
                <td class="pv2 ph3"><code>data-fv-uuid___version</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The UUID version. Can be <code>3</code>, <code>4</code>, <code>5</code> or <code>all</code> (the default version)</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import uuid from 'formvalidation/dist/es6/validators/uuid';

const result = uuid().validate({
    value: ...,
    options: {
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message
}
*/
`} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the <code>version</code> option isn't passed to the placeholder message</li>
        </ul>
    </section>

    <RelatedValidators validators={['regexp']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/uri">uri validator</PrevButton>
            <NextButton target="/guide/validators/vat">vat validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
