export class User{

  email: string;
  password: string;
  firstName: string;
  surname: string;
  birthdayDate: Date;

  constructor(mail: string, psw: string, fName: string, sName: string, bDate : Date){
    this.email = mail;
    this.password = psw;
    this.firstName = fName;
    this.surname = sName;
    this.birthdayDate = bDate;
  }

}
