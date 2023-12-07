import { RecoverPasswordComponent } from "./recover-password.component"

describe('clicking on hello function', () => {
  it('must return Hello World!',()=>{
    const comp = new RecoverPasswordComponent();
    expect(comp.hello()).toBe('Hello World!')
  });
  // it('must return Hello World! -2',()=>{
  //   const comp = new RecoverPasswordComponent();
  //   expect(comp.helloW).toBe('Hello World')
  // });
})