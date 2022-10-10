
const { LoginFb} = require('./util');



test("Should output an email",()=>{
    const text = LoginFb("test@gmail.com","123456789");
    expect(text).toBe('Login Ok');
})