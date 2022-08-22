import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponentComponent } from './application-component/application-component.component';
import { ConversationHistoryComponentComponent } from './conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './conversation-thread-component/conversation-thread-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ConversationControlComponentComponent } from './conversation-control-component/conversation-control-component.component';
import { SendMessageComponentComponent } from './send-message-component/send-message-component.component';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { SenderMessageComponentComponent } from './sender-message-component/sender-message-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { LoggingService } from './loggin-service';
import { HttpClientModule } from "@angular/common/http";
import { MessagingDataServiceService } from './messaging-data-service.service';
import { MessageCountComponent } from './message-count/message-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponentComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ContactListComponentComponent,
    ConversationControlComponentComponent,
    SendMessageComponentComponent,
    UserMessageComponentComponent,
    SenderMessageComponentComponent,
    ContactComponentComponent,
    HeaderComponentComponent,
    HighlightDirective,
    MessageCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoggingService,
    MessagingDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
