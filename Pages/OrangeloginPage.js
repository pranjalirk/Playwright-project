import { BasePage } from "./BasePages";

export class OrangeloginPage extends BasePage
{
    constructor(page){
        super(page)   //parent class constructor call
        this.usernameInput=page.locator("[name='username']")
        this.passwordInput=page.locator("[name='password']")
        this.loginButton=page.locator("[type='submit']")


        //Dashboard
        this.dashboardHeader=page.locator("//h6[text()='Dashboard']")
        this.userDropdown=page.locator(".oxd-userdropdown-name")
        this.logoutLink=page.locator("//a[text()='Logout']")
    }

    async EnterUrl(url){
        await this.navigateTo(url)
    }

    async login(username,password){
        await this.type( this.usernameInput,username)

        await this.type(this.passwordInput,password)

        await this.ClickonElement( this.loginButton)
    }

    async logout(){
        await this.ClickonElement( this.userDropdown)

        await this.ClickonElement(this.logoutLink)
    }
}