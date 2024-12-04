// function log <T>(value:T):T {
//     console.log(value)
//     return value
// }
//
// log<number>(5)
// log<number[]>([1,2,3,4,5])
// //泛型接口
// interface Log<T=string>{
//     (value:T):T // 泛型接口的默认类型是string
// }
// const log2:Log<number>=log
// // 泛型类
// class Log2<T>{
//     run(value:T):T{
//         console.log(value)
//         return value
//     }
// }
// const log3=new Log2<number>()
// log3.run(5)
//
//
