export default `<!doctype html>
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
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100 js-email-address" name="primaryEmail" placeholder="Primary email" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100 js-email-address" name="secondaryEmail" placeholder="Secondary email" />
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

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                email: {
                    // All the email address field have js-email-address class
                    selector: '.js-email-address',
                    validators: {
                        callback: {
                            message: 'You must enter at least one email address',
                            callback: function(input) {
                                let isEmpty = true;
                                const emailElements = fv.getElements('email');
                                for (const i in emailElements) {
                                    if (emailElements[i].value !== '') {
                                        isEmpty = false;
                                        break;
                                    }
                                }

                                if (!isEmpty) {
                                    // Update the status of callback validator for all fields
                                    fv.updateFieldStatus('email', 'Valid', 'callback');
                                    return true;
                                }

                                return false;
                            }
                        },
                        emailAddress: {
                            message: 'The value is not a valid email address'
                        },
                    },
                }
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
            },
        }
    );
});
</script-tag>
</body>
</html>
`;