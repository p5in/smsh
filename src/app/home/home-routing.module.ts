import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { HomeGuard } from "../guards/home.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    canActivate: [HomeGuard],
    children: [
      {
        path: "feed",
        loadChildren: () =>
          import("../pages/feed/feed.module").then((m) => m.FeedPageModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../pages/notifications/notifications.module").then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: "messages",
        loadChildren: () =>
          import("../pages/message/message.module").then(
            (m) => m.MessagePageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../pages/settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "",
        redirectTo: "/home/feed",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
