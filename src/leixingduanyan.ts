// interface  Foo{
//     bar:number
// }
// let foo= {} as Foo
// foo.bar=1
//
//
// // x兼容y
// type Compatible<T,U> = T extends U ? T : U //意思是T是U的子集，就返回T，否则返回U
//  let a:Compatible<string,number|string>='1'
// // x兼容y：x是目标类型，y是源类型
// interface  X {
//     a:any;
//     b:any;
// }
// interface Y{
//     a:any;
//     b:any;
//     c:any;
// }
// let x:X={a:1,b:2}
// let y:Y={a:1,b:2,c:3}
// x=y
// //函数兼容，目标类型的参数个数要小于等于源类型
