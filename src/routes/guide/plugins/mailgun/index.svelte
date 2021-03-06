<svelte:head>
	<title>FormValidation • Mailgun plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Mailgun plugin</h1>
    <h2 class="f4 fw4 tc">Validate an email address by using Mailgun API</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy"><a href="http://www.mailgun.com" class="blue dim link">Mailgun</a> is one of most popular email services. It also provides free API to <a href="/guide/validators/email-address" class="blue dim link">validate an email address</a> based on:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Mailbox detection</li>
            <li>Syntax checks (RFC defined grammar)</li>
            <li>DNS validation</li>
            <li>Spell checks</li>
            <li>Email Service Provider (ESP) specific local-part grammar (if available)</li>
        </ul>
        <p class="lh-copy">To use it, you need to <a href="https://mailgun.com/signup" class="blue dim link">sign up</a> for a Mailgun account and get a free API key.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Mailgun plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mailgun.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                ...,
                mailgun: new FormValidation.plugins.Mailgun({
                    apiKey: ...,
                    field: ...,
                    message: ...,
                    suggestion: ...,
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>

    <section class="mv5">
        <Heading>Options</Heading>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>apiKey</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The API key provided by Mailgun</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>field</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The field name that will be validated</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">Error message indicates the input is not valid</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>suggestion</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Show suggestion if the email is not valid. By default, it is set to <code>false</code></td>
            </tr>
        </table>
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">You can use the following sample email addresses to test with your app.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Does not meet Gmail minimum local-part length of 6 characters</td>
                <td class="pv2 ph3 lh-copy">john@gmail.com</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Invalid, because gmaill.com does not have valid MX records</td>
                <td class="pv2 ph3 lh-copy">john.smith@gmaill.com</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Invalid because while microsoft.io does not have any MX records, it does have fallback A records, but alas no Mail Exchanger responds</td>
                <td class="pv2 ph3 lh-copy">john@microsoft.io</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Meets Gmail 6 character minimum and all other requirements</td>
                <td class="pv2 ph3 lh-copy">john.smith@gmail.com</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Meets pure syntax checks</td>
                <td class="pv2 ph3 lh-copy">"hello world"@domain.com</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 lh-copy">Suggest new email address</td>
                <td class="pv2 ph3 lh-copy">hello@gail.com</td>
            </tr>
        </table>
        <p class="lh-copy">The following sample code demonstrates how to use Mailgun plugin to validate email address which its form is made with <a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a>:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mailgun.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                mailgun: new FormValidation.plugins.Mailgun({
                    // Put your Mailgun public API key here
                    apiKey: '...',
                    field: 'email',
                    message: 'The email address is not valid',
                    suggestion: true,
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <RelatedValidators validators={['promise', 'remote']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/l10n">L10n plugin</PrevButton>
            <NextButton target="/guide/plugins/mandatory-icon">MandatoryIcon plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
