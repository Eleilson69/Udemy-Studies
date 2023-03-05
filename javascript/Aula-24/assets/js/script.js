const  criaCalculadora = () => {
    return {
        display: document.querySelector('.display'),
        bntClear: document.querySelector('bnt-clear'),

        inicia() {
            this.clickBotoes();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta Invalida')
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta Invalida')
                return;
            }
        },

        clickBotoes() {
            document.addEventListener('click', (e) =>{
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.bntParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        bntParaDisplay(valor) {
           this.display.value += valor;
        }
    };
};

const Calculadora = criaCalculadora();
Calculadora.inicia();