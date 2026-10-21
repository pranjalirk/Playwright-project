export class BasePage
{
    constructor(page){
        this.page=page;

    }

    //common user defined reusable method
    async navigateTo(url){
        await this.page.goto(url)  //https://opensourcedemo.orangehrmlive.com/web/index.php/auth/login 
    }

    //to enter input value in an input box
    async type (locator,value){ //locator("[name='password']") ,admin123 
        await locator.fill(value) //locator("[name='password']").fill('admin123')
    }

    //to click on link button
    async ClickonElement(locator){
        await locator.click();  ////locator("[type='submit']").click() 
    }

    //to get text present on webpage
    async getText(locator){
        return await locator.textContent();  //await //h5.textContent();  //Login 
    }
}