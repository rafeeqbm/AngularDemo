import { Injectable } from '@angular/core';
export interface Comment {
  commentDate: Date;
  text: string;
}

export interface User {
  userId: string;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[] = [];

  constructor() { }

  getComments(): Comment[] {
    this.comments = [
      { commentDate : new Date('1/1/2001'), text : 'test' },
      { commentDate : new Date('1/1/2001'), text : 'test2' },
      { commentDate : new Date('1/1/2001'), text : 'tes3' },
      { commentDate : new Date('1/1/2001'), text : 'test4' },
    ];
    return this.comments;
  }

  insertComments(comment: Comment): Comment[] {
    this.comments.unshift(comment);
    return this.comments;
  }

  getUsers(): User[] {
    return ([{ userId : '1', name : 'user 1' },
    { userId : '2', name : 'user 2' },
    { userId : '3', name : 'user 3' },
    { userId : '4', name : 'user 4' }
  ]);
  }
}
