import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from "./Bean/Wallet";
import { Observable } from "rxjs";
import { WalletTransaction } from './bean/WalletTransaction';
import { Booking } from './bean/Booking';
import { Card } from './bean/Card';
import { User } from './bean/User';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }
  updateUserPassword(newPassword: String) {
    let userId  = localStorage.getItem("userId");
    let url = "http://localhost:8099/userservice/users/"+userId+"/user"
    return this.http.put(url,newPassword);
  }

  getWalletDetails(userId): Observable<Wallet> {
    let url = "http://localhost:8099/walletservice/wallets/"+userId;
    return this.http.get<Wallet>(url);
  }

  getWalletTransactions(walletId): Observable<WalletTransaction[]> {
    let url = "http://localhost:8099/walletservice/walletTransactions/" + walletId;
    return this.http.get<WalletTransaction[]>(url);
  }

  enterWalletTransaction(walletTransaction:WalletTransaction,walletId:Number){
    
    let url = "http://localhost:8099/walletservice/walletTransactions/"+walletId;
    return this.http.post(url,walletTransaction);
  }

  getBookings(userId): Observable<Booking[]>{
    let url = "http://localhost:8099/bookingservice/bookings/"+userId;
    return this.http.get<Booking[]>(url);
  }

  getCards(userId): Observable<Card[]>{
    let url = "http://localhost:8099/userservice/user/"+userId+"/cards"
    return this.http.get<Card[]>(url);
  }

  updateWallet(wallet){
    let url = "http://localhost:8099/walletservice/wallets/"+wallet.walletId;
    return this.http.put(url,wallet);
  }
  getUserById(userId):Observable<User>{
    let url = "http://localhost:8099/userservice/users/"+userId;
    return this.http.get<User>(url);
  }

  updateUser(user:User){
    let url = "http://localhost:8099/userservice/users/"+user.userId;
    return this.http.put(url,user);
  }
  deleteCardByCardId(cardId):Observable<any>{
    let url = "http://localhost:8099/cardservice/cards/"+cardId;
    console.log("card deleted")
     return this.http.delete(url);
  }
  updateCard(card:Card):Observable<any>{
    let url = "";
    return this.http.put(url,card);
  }
  addCard(card:Card):Observable<Card>{
    let userId = localStorage.getItem("userId");
    let url = "http://localhost:8099/cardservice/users/"+userId+"/cards";
    return this.http.post<Card>(url,card);

  }

  updatePassword(newPassword):Observable<any>{
    let userId = localStorage.getItem("userId");
    let url = "http://localhost:8099/userservice/users/"+userId+"/user"
    return this.http.put<any>(url,newPassword)
  }

}
