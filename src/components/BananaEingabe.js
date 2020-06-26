import React, { Component } from 'react';
import "./BananaDetails.css";

class Counter extends Component {
    constructor() {
        super();
        this.state = { saldo: 0, 
                       eingabe: 0 }
    } 
    BananaEingabe = e => {
      console.log(e.target.value);
      this.setState({eingabe: parseInt(e.target.value)})
    }
    BananaEinzahlen = () => {
        this.setState({ saldo: this.state.saldo + this.state.eingabe, eingabe: ""});
    }
    BananaAuszahlen = () => {
        this.setState({ saldo: this.state.saldo - this.state.eingabe, eingabe: ""});
    }
render() {
    return (
        <section>
            <article>
                <h2 className="konto">Dein Girokonto</h2>
                <h2 className="saldo">{this.state.saldo}</h2>
            </article>
            <form>
                <input name="geldbetrag" className="geldbetrag" type="number" placeholder="Bitte geben Sie einen Betrag ein!" onChange={this.BananaEingabe} value={this.state.eingabe}></input>
                    <div>
                        <input name="einzahlen" className="einzahlen" type="button" value="Einzahlen" onClick={this.BananaEinzahlen}/>
                        <input name="auszahlen" className="auszahlen" type="button" value="Auzahlen" onClick={this.BananaAuszahlen}/>
                    </div>
            </form>
        </section>   
       )
    }
}
export default Counter;



