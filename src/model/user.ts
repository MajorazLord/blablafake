import {StorageProvider} from "../providers/storage/storage";

export class User{

  constructor(public mail: string, public psw: string, public fName: string, public sName: string, public bDate : Date, private storageProvider : StorageProvider){
  }

  get(){
    this.storageProvider.getValue('user').then(user => {
      this.fName = user.fName;
      this.sName = user.sName;
      this.mail = user.mail;
      this.psw = user.psw;
      this.bDate = user.bDate;
    });
  }

  save(){
    this.storageProvider.setValue('user', {
      fName : this.fName,
      sName : this.sName,
      mail : this.mail,
      psw : this.psw,
      bDate : this.bDate
    });
  }




}
