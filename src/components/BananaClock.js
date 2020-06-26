import React, { Component } from 'react';
import "./BananaDetails.css";

/*  Component Klasse erstellen und props mit Super(props) zur weiternutzung zur Verfügung stellen (this ist new Date() im Objecht als Key(date)))  */
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

/*  Intervall */
    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 1000);
    }

/*  Intervall aufräumen (damit Function nicht unendlich im Hintergrund läuft wenn es weg ist/entfernt wurde) */
    componentWillUnmount() {
        clearInterval(this.ticker);
    }

/*  neuer Zustand (aktualisierung) */
    tick() {
        this.setState({
            date: new Date()
        });
    }

/*  Anzeige Uhr im Virtual DOM inkl. JS */
    render() {
            return (
                    <h3 className="clock">{this.state.date.toLocaleTimeString}</h3>
        );
    }
}

export default Clock;