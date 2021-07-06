export class Symptome {
    date: string;
    id: string;

    constructor(public idPatient: string, public texte: string, public voice: string) {
        this.date = new Date().toString();
    }
}
