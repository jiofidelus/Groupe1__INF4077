export class Utilisateur {
  photo: string;
  date: string;

  constructor(public nom: string, public prenom: string, public email: string, public telephone: any) {
    this.photo = '';
    this.date = new Date().toString();
  }
}
