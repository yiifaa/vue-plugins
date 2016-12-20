let template = `
               <div class="sti-validator">
                 <slot>
                 </slot>
               </div>
              `
/**
 * 规则校验主组件,依赖于jquery
 * @class Validator
 * @requires jquery - 依赖于jquery工具库
 */
export default {

  template,

  props :

  {
      /**
       * 需要校验的表单，目前只支持校验表单，也就是说，所有的校验内容必须放在表单中
       * @memberof Validator.prototype
       * @desc 必须满足css选择符规范，如'#form',如果没有显式指定，则对容器内的所有表单进行校验
       */
      form : {
          type : String,
          required : false,
          default () {
            return 'form'
          }
      }
  },

  ready () {
      $(this.form, this.$el).validate()
  }

}
