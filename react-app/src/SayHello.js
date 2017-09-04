class SayHello{
    // 该方法需要 SayHello 实例化后才能调用
    hehe(){
        console.log(this);
    }
    setName(name){
        console.log('你好：' + name);
    }
    
}
export { SayHello } ;