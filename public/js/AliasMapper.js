class AliasMapper extends Stimulus.Controller {
    
    static get targets() {
        return [
            'form',
            'alias',
            'name',
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
        this.aliasTarget.textContent = alias
        this.submitButtonTarget.setAttribute("disabled", true)
        this.nameTarget.textContent = "..."
        fetch(`api/endpoint.php?alias=${encodeURIComponent(alias)}`)
            .then(response => response.json())
            .then((name) => {

                const resolvedName = name === null ? 
                    "<unknown>" : 
                    name

                this.nameTarget.textContent = resolvedName
                this.submitButtonTarget.removeAttribute("disabled")
            })
            .catch(() => {
                this.submitButtonTarget.removeAttribute("disabled")
            })
        
    }



}
