const decorate:ClassDecorator = (target:any) => {
    console.log(target,'函数调用')
}
@decorate
class test{
    constructor() {
        console.log('test')
    }
}

const test1= new test()
