import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactFieldType} from '@ionic-native/contacts';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  wheretosearch : ContactFieldType[] = ["displayName"];

 
  contactsFound= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private contacts: Contacts) {
    this.search('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

search(val) {
this.contacts.find(this.wheretosearch, {filter : val}).then((contacts) => {
  this.contactsFound =contacts,
 
  (error: any) => console.error('Error saving contact.', error)
});

}

onsearch(event) {

  let value = event.target.value;
  if(value&&value.trim != ''){
   this.search(value);
  }
  else
  this.search('');
 
  
}



}
