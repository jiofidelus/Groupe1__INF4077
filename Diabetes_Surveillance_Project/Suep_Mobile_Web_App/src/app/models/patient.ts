export class Patient {
    date: string;
    id: string;

    constructor(public nom: string, public prenom: string, public email: string, public telephone: any, public sexe: string, public medecin: string, public description: string, public photo: string, public position: any) {
        this.date = new Date().toString();
    }
}
