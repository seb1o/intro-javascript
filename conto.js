//1)Crea una classe base ContoBancario:
    //-La classe ContoBancario deve avere le seguenti proprietà: titolare (Human) saldo (numero)
    //-La classe ContoBancario deve avere i seguenti metodi:
        //-toString()
        //-deposita(importo): Aggiunge l'importo al saldo.
        //-preleva(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti, altrimenti stampa un messaggio di errore.

        class ContoBancario {
            constructor(titolare, saldo) {
                this.titolare = titolare; 
                this.saldo = saldo; 
            }
        
            
            toString() {
                return `Titolare: ${this.titolare.name} ${this.titolare.surname}
        Saldo: €${this.saldo}`;
            }
        
            
            deposita(importo) {
                this.saldo += importo;
                
            }
        
            // Metodo per prelevare un importo
            preleva(importo) {
                if (importo <= this.saldo) {
                    this.saldo -= importo;
                    
                } else {
                    console.log(`Errore: fondi insufficienti.`);
                }
            }
        }
        


        
//2)Crea una classe ContoCorrente che eredita da ContoBancario:
    //-La classe ContoCorrente deve avere le seguenti proprietà: 
         //-limiteSpesa (numero)
    //-La classe ContoCorrente deve avere i seguenti metodi aggiuntivi:
        //-paga(importo): Sottrae l'importo dal saldo se ci sono fondi sufficienti o se l'importo è entro il limite di spesa, altrimenti stampa un messaggio di errore.
        // se il pagamento va a buon fine il metodo aggiunge al saldo il 2% dell'importo


        class ContoCorrente extends ContoBancario {
            constructor(titolare, saldo, limiteSpesa) {
                super(titolare, saldo); 
                this.limiteSpesa = limiteSpesa; 
            }
        
            
            paga(importo) {
                if (importo <= this.saldo || importo <= this.limiteSpesa) {
                    this.saldo -= importo;
                    const cashback = importo * 0.02; 
                    this.saldo += cashback;
                    
                } else {
                    console.log(`Errore: fondi insufficienti e l'importo supera il limite di spesa.`);
                }
            }
        
            toString() {
                const contoCorrenteStr = `${super.toString()}
        Limite di spesa: €${this.limiteSpesa}`;
                return contoCorrenteStr;
            }
        }


//3)Crea una classe derivata ContoRisparmio che eredita da ContoBancario:
    //-La classe ContoRisparmio deve avere le seguenti proprietà aggiuntive:
        //-sogliaBonus(numero)
    //-La classe ContoRisparmio deve avere i seguenti metodi aggiuntivi:
        //-applicaBonus(): Aggiunge un bonus del 2% (del saldo) al saldo se il saldo supera la soglia.



        class ContoRisparmio extends ContoBancario {
            constructor(titolare, saldo, sogliaBonus) {
                super(titolare, saldo); 
                this.sogliaBonus = sogliaBonus; 
            }
        
            
            applicaBonus() {
                if (this.saldo > this.sogliaBonus) {
                    const bonus = this.saldo * 0.02; 
                    this.saldo += bonus;
                    
                } else {
                    console.log(`Saldo inferiore alla soglia. Nessun bonus applicato.`);
                }
            }
        
            toString() {
                const contoRisparmioStr = `${super.toString()}
        Soglia bonus: €${this.sogliaBonus}`;
                return contoRisparmioStr;
            }
        }





        const human1 = new Human('SpongeBob', 'SquarePants', 1986, 'USA', 'Male');
const human2 = new Human('Patrick', 'Star', 1984, 'USA', 'Male');

 
const contoBancario1 = new ContoBancario(human1, 1000000);
const contoBancario2 = new ContoBancario(human2, 2000000);

console.log(contoBancario1.toString());
contoBancario1.deposita(500);
console.log(contoBancario1.toString());
contoBancario1.preleva(200);
console.log(contoBancario1.toString());
contoBancario1.preleva(1500000);

console.log(contoBancario2.toString());
contoBancario2.deposita(1000);
console.log(contoBancario2.toString());
contoBancario2.preleva(300);
console.log(contoBancario2.toString());
contoBancario2.preleva(3000000);

 
const contoCorrente1 = new ContoCorrente(human1, 1000000, 1000);
const contoCorrente2 = new ContoCorrente(human2, 2000000, 2000);

console.log(contoCorrente1.toString());
contoCorrente1.paga(300);
console.log(contoCorrente1.toString());
contoCorrente1.paga(1500);

console.log(contoCorrente2.toString());
contoCorrente2.paga(500);
console.log(contoCorrente2.toString());
contoCorrente2.paga(2500);

 
const contoRisparmio1 = new ContoRisparmio(human1, 1000000, 800);
const contoRisparmio2 = new ContoRisparmio(human2, 2000000, 1500);

console.log(contoRisparmio1.toString());
contoRisparmio1.applicaBonus();
console.log(contoRisparmio1.toString());

console.log(contoRisparmio2.toString());
contoRisparmio2.applicaBonus();
console.log(contoRisparmio2.toString());