class AliasMapper extends Stimulus.Controller {
    
    static get targets() {
        return [
            'form',
            'alias',
            'aliasMessage',
            'aliasSelect',
            'submitButton',
        ]
    }

    initialize() {
        this.formTarget.addEventListener(
            'submit', 
            this.handleFormSubmit.bind(this)
        )
    }

    handleFormSubmit(e) {
        e.preventDefault()
        const alias = this.aliasSelectTarget.value
        this.handleFetchAlias(alias)
    }
    
    handleFetchAlias(alias) {
        this.aliasMessageTarget.setAttribute("data-invisible", true)
        this.submitButtonTarget.setAttribute("disabled", true)
        fetch(`api/endpoint.php?alias=${encodeURIComponent(alias)}`)
            .then(response => response.json())
            .then((name) => {

                const resolvedName = name === null ? 
                    "<unknown>" : 
                    name

                this.aliasTarget.textContent = resolvedName
                this.aliasMessageTarget.setAttribute("data-invisible", false)
                this.submitButtonTarget.removeAttribute("disabled")
            })
            .catch(() => {
                this.submitButtonTarget.removeAttribute("disabled")
            })
        
    }



}
