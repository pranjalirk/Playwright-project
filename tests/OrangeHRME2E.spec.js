import {test,expect} from "@playwright/test"
import { OrangeloginPage} from "../Pages/OrangeloginPage" 


    let loginpage;

    test.describe("Orange hrm E2E test cases",async()=>{

        test.beforeEach(async({page})=>{
            loginpage=new OrangeloginPage(page);
            console.log(loginpage)

            //enter url
            await loginpage.EnterUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            //enter un,pwd and click login button
           await loginpage.login("Admin","admin123");
        })
        test ("verify dashboard header",async()=>{
            await expect(loginpage.dashboardHeader).toContainText("Dashboard")
            
            
        })
    })

    //npx playwright test OrangeHRmE2E.spec.js --project=chromium --headed