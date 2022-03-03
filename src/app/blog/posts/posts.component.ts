import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts;

  constructor(meta: Meta, title: Title) {
    this.posts = this.postsData();

    // Sets the <title></title>
    title.setTitle('Blogist');

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: 'author', content: 'Blogist' },
      { name: 'description', content: 'This is a description.' },
    ]);
  }
  ngOnInit() {
  }
  private postsData() {
    return [
      {
        "title": "Making Angular.js realtime with Websockets by marble",
        "pubDate": "2017-08-23 14:41:52",
        "link": "https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10372",
        "guid": "http://blog.pusher.com/?p=682#comment-10372",
        "author": "marble",
        "thumbnail": "",
        "description": "always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from",
        "content": "<p>always a big fan of linking to bloggers that I enjoy but dont get a great deal of link enjoy from</p>",
        "enclosure": [],
        "categories": []
      },
      {
        "title": "Making Angular.js realtime with Websockets by strapless strap on",
        "pubDate": "2017-08-23 05:05:08",
        "link": "https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10371",
        "guid": "http://blog.pusher.com/?p=682#comment-10371",
        "author": "strapless strap on",
        "thumbnail": "",
        "description": "very couple of internet websites that transpire to be detailed beneath, from our point of view are undoubtedly properly worth checking out",
        "content": "<p>very couple of internet websites that transpire to be detailed beneath, from our point of view are undoubtedly properly worth checking out</p>",
        "enclosure": [],
        "categories": []
      },
      {
        "title": "Making Angular.js realtime with Websockets by bondage restraints",
        "pubDate": "2017-08-22 17:09:17",
        "link": "https://blog.pusher.com/making-angular-js-realtime-with-pusher/#comment-10370",
        "guid": "http://blog.pusher.com/?p=682#comment-10370",
        "author": "bondage restraints",
        "thumbnail": "",
        "description": "very couple of web sites that occur to be in depth below, from our point of view are undoubtedly properly worth checking out",
        "content": "<p>very couple of web sites that occur to be in depth below, from our point of view are undoubtedly properly worth checking out</p>",
        "enclosure": [],
        "categories": []
      }
    ];
  }
}
