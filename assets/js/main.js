function Calculadora() {//Classe
    //Atributos públicos
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.capturaEnter = () => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    //sintaxe alternativa: (el) =>{this.display.value += el.innerText};

    this.inicia = () => {//arrow function
        this.capturaCliques();
        this.capturaEnter();

    }

    this.del = e => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {

        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert("Conta inválida!")
                this.clear();
                return
            };

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida!');
            this.clear();
            return;
        }
    }

    this.clear = () => {
        this.display.value = '';
    }
}

const c1 = new Calculadora();
c1.inicia();
