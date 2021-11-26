const {0: passwordField, 1: okButton, 2: launchButton } = document.querySelectorAll('.control-panel__inner>input')
const levers = document.querySelectorAll('.levers input')
const rocket = document.querySelector("img.rocket")
const checkButtons = document.querySelectorAll('.check-buttons input')
let buttonsOkay = false
let leversOkay = false

levers.forEach(lever => {
    lever.onchange = ( e => {
        let leverTotal = 0
        for (const lever of levers) {
            leverTotal += Number(lever.value)
        }
        leverTotal === 500 ? leversOkay = true : leversOkay = false;
        leversOkay && buttonsOkay ? launchButton.disabled = false : launchButton.disabled = true;
    })
})


launchButton.addEventListener('click', e => {
    rocket.animate([
        { // from
            left: '240px',
            bottom: '-225px'
        },
        { // to
            left: '440px',
            bottom: '117px'
        }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    })
})


checkButtons.forEach(buttons => {
    buttons.onchange = ( e => {
        let buttonTotal = 0
        for (const button of checkButtons) {
            button.checked ? buttonTotal += 1 : button;
        }
        buttonTotal === 6 ? buttonsOkay = true : buttonsOkay = false;
        leversOkay && buttonsOkay ? launchButton.disabled = false : launchButton.disabled = true;
    })
})

okButton.addEventListener('click', (e) => {
    if (passwordField.value === 'TrustNo1') {
        for (const lever of levers) {
            lever.disabled = false
        }
        for (const button of checkButtons) {
            button.disabled = false
        }
    }
})