
const { loginComplete} = require('./util');


test("Should output an email",  async ()=>{
    const text2 =  await loginComplete("test@gmail.com","123456789");
    console.log(text2)
    expect(text2).toBe("Logueado");

  
});