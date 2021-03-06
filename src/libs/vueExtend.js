import Vue from 'vue'
/**
 * Vue 扩展类 扩展自定义指令 v-model.price 格式化价格
 * */
Vue.directive('model', {
	bind: function (el, binding, vnode) {
		if (binding.modifiers.price) {
			el.addEventListener('input', function (e) {
				return
				formattedHandler(e)
			})
			el.addEventListener('blur', function (e) {
				formattedHandler(e)
			})
		}
		//价钱格式工具
		var formattedValue = function (value) {
			//保留两位小数
			return value.trim().slice(
				0,
				value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3
			);
		};
		//格式化函数
		var formattedHandler = function (e) {
			var tar = formattedValue(e.target.value);
			e.target.value = tar;
			vnode.context.value = tar;
		}
	},
})
