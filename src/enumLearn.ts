//字符串enum
enum number {
    one,
    two,
    three,
    seven = 7,
}
// 字符串枚举
enum stringEnum{
    hello = 'hello',
    world = 'world',
    hi = 'hi'
}
// 异构枚举
enum e {
    one = 1,
    two,
    three = 'three',
    four = 'four',
    five = 5,
    six
}
// 枚举成员不可修改
// 枚举分成四类：常量、计算、字符串常量、字符串计算
//计算
enum E {
    A,
    B = A + 1,
    C = 2
}
//字符串计算
enum E1 {
    A = 'a',
    B = A + 'b'
}
