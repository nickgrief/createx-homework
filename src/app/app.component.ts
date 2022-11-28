import { Component, Inject, OnInit } from "@angular/core";
import { HostService, HOST_SERVICE } from "./services/host.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{
  title = "createx";

  constructor(@Inject(HOST_SERVICE) private host: HostService){}

  ngOnInit(): void {
      console.log(this.host.baseHref);
  }
}
