// AliasMapper controller
class AliasMapper extends Stimulus.Controller {
    
    static get targets() {
        return [
            'form',
            'alias',
            'name',
            'aliasSelect',
        ]
    }

    initialize() {
        // this.handleFormSubmit = 

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
        this.nameTarget.textContent = "..."
        console.log('fetching', alias);
        // fetch(`/api/endpoint?alias=${encodeURIComponent(alias)}`)
        fetch(`api/endpoint`)
        // fetch(`api/endpoint?alias=${encodeURIComponent(alias)}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                
            })
        
    }



}
