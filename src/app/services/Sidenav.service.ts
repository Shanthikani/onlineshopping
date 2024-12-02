import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Subject } from "rxjs";

@Injectable()
export class SidenavService
{
    private sideNav!:MatSidenav;

    //private sidenavToggleSubject=new Subject<void>();

    //sidenavToggle$=this.sidenavToggleSubject.asObservable();

    public setSideNav(sideNav:MatSidenav)
    {
        this.sideNav=sideNav;
    }
    public open():boolean
    {
        this.sideNav.open();
        return true;
    }
    public close():boolean
    {
        this.sideNav.close();
        return true;
    }
    public toggle()
    {
        this.sideNav.toggle();
    }

}