const targetNode = document.getElementById('monitored-value')

const config = {attributes: true, childList: true, subtree: true, characterData: true}

const allowedValues = {
    eab4835a237cc5f38d0455e0b7094235: 'You cannot change this text'
}

const callback = function(mutationList, observer) {
    console.log("SOMETHING CHANGED!!!!")
    for(const mutation of mutationList) {
        if(mutation.type === "characterData") {
            if (allowedValues[mutation.target.parentElement.dataset.checksum] === undefined) {
                location.reload()
            }
            mutation.target.parentElement.innerHTML = allowedValues[mutation.target.parentElement.dataset.checksum]
        }
        console.log(mutation)
    }
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)