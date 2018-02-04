import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public object_feed = {
    title: 'Matheus Passos',
    date: 'November 5, 1995',
    description: 'Estou criando um app incrivel...',
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: '11h ago'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private moovieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.moovieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
