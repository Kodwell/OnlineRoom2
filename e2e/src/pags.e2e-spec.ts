import { Browser, element, by, browser } from "protractor";

describe('Test de login', ()=>{
    //codigo de config
    beforeEach(()=>{
        browser.get("/");
    });
    //prueba
    it ("La página debe entrar a login automaticamente",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("/LoginPage");
        //expect indica que se debe hacer
    });
});
