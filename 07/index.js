window.onload=function(){
    //创建一个vue实例
    new Vue({
        el: "#root", //element
        data: {
            name: 'jack',
            text: '',
            age: 20,
            obj: {name:'xxx'},
            lists:[{name:'手机', state:false},
                {name:'电脑', state:false},
                {name:'化妆品', state:true},
                {name:'包', state:false}
                ],
            count:0
        },
        mounted(){
            this.countList();
        },
        methods:{
            add:function(name){
                if (name) {
                    this.lists.unshift({name:name, state:false});
                    this.text = '';
                    this.countList();
                }
            },
            //计算未采购数量
            countList(){
                /*this.count = 0;
                this.lists.forEach((el, index)=>{
                    if (el.state === '0') {
                        this.count++;
                    }
                })*/
                this.count = this.lists.filter(item => !item.state).length;
            },
            del(index){
                this.lists.splice(index, 1);
                this.countList();
            }
        },
        filters: {
            stateFilter: function(type){
                switch(type) {
                    case false:
                        return '未采购';
                    case true:
                        return '已采购';
                    default:
                        return '';
                }
            }
        }
    })
}
