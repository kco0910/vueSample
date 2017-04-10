/**
 * Created by Administrator on 2017/3/27.
 */
//model
var msgData1 = {
    message : 'Hello,World !',
};
var msgData2={
    yes:true,
    no:true,
    age:28,
    name:'fj',
};
//viewModel
new Vue({
    el:'#app',
    data:msgData1
});
new Vue({
    el:'#app2',
    data:msgData2
});
new Vue({
    el:'#app3',
    data:{
        yes:true,
        age:1
    }
});
new Vue({
    el:'#app4',
    data:{
        age:10
    }
});
new Vue({
    el:"#app5",
    data:{
        people:[{
            name:'Jack',
            age:30,
            sex:'Male'
        },{
            name:'Bill',
            age:26,
            sex:'Female'
        },{
            name:'Chris',
            age:36,
            sex:'Male'
        }]
    }
});