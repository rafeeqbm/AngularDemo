import { Component, ViewChild, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DxHtmlEditorComponent } from 'devextreme-angular';
import { DxiMentionComponent } from 'devextreme-angular/ui/nested';
import { CommentService } from './service/comment.service';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild(DxHtmlEditorComponent, { static: true })
  commentEditor: DxHtmlEditorComponent;

  @ViewChild(DxiMentionComponent, { static: true })
  userMention: DxiMentionComponent;

  title = 'DevExtremeHTMLEditorMention';
  dataSource: DataSource;
  userDataSource: DataSource;
  hasMentionListOpened: boolean = false;
  constructor(
    private commentService: CommentService
  ) {}

  ngOnInit(): void {

    this.userMention.optionChangedHandlers.subscribe((event, action) => {
      console.log(event);
      console.log(action);
    });

    this.commentEditor.mentionsChange.subscribe(event => {
      console.log(event);
    });

    this.userDataSource = new DataSource({
      store : new ArrayStore({
        data: this.commentService.getUsers(),
      })
    });

    this.dataSource = new DataSource({
      store : new ArrayStore({
        data: this.commentService.getComments(),
      })
    });
  }

  editorChange(event: any) {
    this.hasMentionListOpened = (event.previousValue as string).startsWith(
      '<p>@',
    );
  }

  emitNewComment(event: KeyboardEvent) {
    if (this.hasMentionListOpened) {
      this.hasMentionListOpened = false;
      return;
    }
    event.preventDefault();
    this.commentService.insertComments({ text : this.commentEditor.value, commentDate : new Date() });
    this.dataSource.load();
    this.commentEditor.value = '';
  }
}
