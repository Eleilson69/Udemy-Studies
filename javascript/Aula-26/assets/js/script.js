function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.keyCode !== 13) return;
            this.resultcalc();
        })
    }

    this.capturaClicks = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.delete(el);
            if (el.classList.contains('btn-eq')) this.resultcalc(el);
        })
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
    
    this.resultcalc = () => {
        let conta = eval(this.display.value);

        try {
           if (!conta){
                alert('Conta invalida');
                return;
           }
           this.display.value = conta;
        } catch (err) {
            alert('Conta invalida');
            return;
        };
    };
}

const calculadora = new Calculadora();
calculadora.inicia();