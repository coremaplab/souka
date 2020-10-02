Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
});
var vm = new Vue({
	el : ".search",
	data : {
		search_content: '',
		engine_name: 'icon-google', 
		engine_url: 'https://www.google.com',
		search_url: 'https://www.google.com/search?q='
	},
	methods:{
		search_action: function() {
			if (this.search_content == "") {
				url = this.engine_url
			} else{
				url = this.search_url+`${this.search_content}`
			}
			window.open(url,"_blank")
		}
	}
});
